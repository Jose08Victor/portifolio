import styled from "styled-components";
import { Header } from "../header";
import { Footer } from "../footer";
import { useContext, useState } from "react";
import { ThemeContext, themes } from "../../theme-context";
import { skillsData } from "../../data/skills-data";

export const Skills = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const [description, setDescription] = useState(<h3>"CLIQUE EM ALGUM ICONE ACIMA PARA VER A DESCRIÇÃO"</h3>)

    return (
        <>
            <Header />

            <Main>
                <H1>Linguagens e Ferramentas</H1>

                <Ul theme={theme}>
                    {
                        skillsData.map((e, index) => {
                            return (
                                <Li key={index} onClick={() => {
                                                                               themes.index++;
                                                                               setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] });

                                                                               setDescription(e.description);

                                                                               const li = document.querySelectorAll("li");
                                                                               
                                                                               li.forEach((e) => e.classList.remove("active"));

                                                                               li[index].classList.add("active")
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

const Main = styled.main`
    margin: 20px;
    width: 100%;
`

const H1 = styled.h1`
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
    
    @media(min-width: 1450px) {
        font-size: 35px;
        margin-bottom: 60px;
    }

    @media(max-width: 600px) {
        font-size: 21px;
    }
`

const Ul = styled.ul`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 10px;
    margin-bottom: 30px;
    
    @media(min-width: 1450px) {
        gap: 30px;
        margin-bottom: 45px;
    }

    @media(max-width: 400px) {
        gap: 15px;
        margin-bottom: 18px;
    }

    li {
        &:hover {
            transform: scale(1.15);  

            h3 {
                border-color: ${props => props.theme.color};
            }   
        }

        svg {
            width: 51px;
            fill: ${props => props.theme.color};
            margin-bottom: 8px;
        }

        &.active svg {
            border: 1px solid ${props => props.theme.color};
            transform: scale(1.35);
            padding: 8px;
        }

        &.active h3 {
            border-bottom: 1px solid ${props => props.theme.color};
        }

        @media(min-width: 1450px) {
            width: 220px;

            svg {
                width: 70px;
                margin-bottom: 18px;
            }
        }

        @media(max-width: 600px) {
            width: 125px;

            svg {
                width: 35px;
            }
        }
    }
`

const Li = styled.li`
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in-out transform;
    cursor: pointer;
`

const H3 = styled.h3`
    border-bottom: 1px solid transparent;
    margin: 5px 0;
    padding-bottom: 2px;
    font-size: 17px;

    @media(min-width: 1450px) {
        font-size: 20px;
    }

    @media(max-width: 600px) {
        font-size: 13.2px;
    }
`

const Div = styled.div`
    border: 1px solid ${props => props.theme.color};
    max-width: 500px;
    min-height: 94px;
    margin: 0 auto;
    font-size: 15.5px;
    text-align: center;
    padding: 10px;

    @media(min-width: 1450px) {
        max-width: 700px;
        font-size: 17.5px;
    }
    
    @media(max-width: 600px) {
        font-size: 11px;
        margin: 0 18px;
    }
`