import { SocialMediasIcons } from "../../components/social-media-icons";
import { Main, Titles, Li, Hr1, Hr2, Details, H1, Div1, Pc, Div2, Cellphone, Div3, A, Hr3, P } from "./styles";
import { ThemeContext } from "../../theme-context";
import { useContext, useState } from "react";
import { projectsData } from "../../data/projects-data";

export const Projects = () => {
    const { theme, changeColor, changeOpacity } = useContext(ThemeContext);

    const [data, setData] = useState(projectsData[0]);

    const handleClick = (e) => document.querySelectorAll("h2").forEach((h2) => (h2 !== e.target) ? h2.classList.remove("active") : h2.classList.add("active"));

    return (
        <Main>
            <div>
                <Titles theme={theme}>
                    {
                        projectsData.map((e) => {
                            return (
                                <Li key={e.id} theme={theme} onClick={(element) => {
                                    handleClick(element);
                                    setData(e);
                                    changeColor();
                                    window.scrollTo({ behavior: "smooth", top: 0 });
                                }}>
                                    <h2 className={ e.id === 1 ? "active" : undefined } >{e.title}</h2>
                                </Li>
                            )
                        })
                    }
                </Titles>

                <Hr1 theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />

                <SocialMediasIcons />
            </div>

            <Hr2 theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />

            <Details>
                <H1>{data.title}</H1>

                <Div1>
                    <Pc src={data.desktopImage} alt="Computador" />

                    <Div2>
                        <Cellphone src={data.mobileImage} alt="Celular" />

                        <Div3>
                            <div>
                                <A href={data.site} target="_blank" theme={theme}><p>View Site</p></A>

                                <Hr3 theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />
                            </div>

                            <div>
                                <A href={data.github} target="_blank" theme={theme}><p>Github</p></A>

                                <Hr3 theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />
                            </div>
                        </Div3>
                    </Div2>
                </Div1>
                
                <P>{data.description}</P>
            </Details>
        </Main>
    )
}