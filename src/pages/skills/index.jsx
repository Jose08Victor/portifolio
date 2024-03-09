import { Footer } from "../../components/footer";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme-context";
import { skillsData } from "../../data/skills-data";
import { Main, H1, Ul, Li, H3, Div } from "./styles";

export const Skills = () => {
    const { theme, changeColor } = useContext(ThemeContext)

    const [description, setDescription] = useState(skillsData[0].description);

    const handleClick = (index) => {
        document.querySelectorAll("li").forEach((e) => e.classList.remove("active"));
        document.querySelectorAll("li")[index].classList.add("active");
    }

    return (
        <>
            <Main>
                <H1>Linguagens e Ferramentas</H1>

                <Ul theme={theme}>
                    {
                        skillsData.map((e, index) => {
                            return (
                                <Li key={index}
                                    className={index === 0 ? "active" : undefined}
                                    onClick={() => {
                                        handleClick(index);
                                        setDescription(e.description);
                                        changeColor();
                                    }}>

                                    {e.icon}

                                    <H3 theme={theme} >{e.name}</H3>
                                </Li>
                            )
                        })
                    }
                </Ul>

                <Div theme={theme}>{description}</Div >
            </Main>

            <Footer />
        </>
    )
}