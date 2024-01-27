import styled from "styled-components"
import { Header } from "../header"
import { Footer } from "../footer"
import { useContext } from "react"
import { ThemeContext } from "../../theme-context"
import { skillsData } from "../../data/skills-data"

export const Skills = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Header />

            <Main>
                <H1>Linguagens e Ferramentas</H1>

                <Ul>
                    {
                        skillsData.map((e) => {
                            return (
                                <Li key={e.id} theme={theme}>
                                    <H3 theme={theme}>{e.name}</H3>

                                    {e.icon}

                                    <P>{e.description}</P>
                                </Li>
                            )
                        })
                    }
                </Ul>
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

    @media(max-width: 600px) {
        font-size: 22px;
    }

    @media(min-width: 1450px) {
        margin-bottom: 60px;
    }
`

const Ul = styled.ul`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    
    @media(min-width: 1450px) {
        margin-bottom: 60px;
        gap: 30px;
    }
`

const Li = styled.li`
    max-width: 300px;
    min-height: 110px;

    @media(min-width: 1440px) {
        max-width: 400px;
    }

    svg {
        width: 51px;
        fill: ${props => props.theme.color};
        float: left;
        margin-right: 8px;
        transition: .3s ease-in-out transform;
        border-radius: 10px;

        &:hover {
            transform: scale(1.15);
        }

        @media(max-width: 600px) {
            width: 35px;
        }
    }
`

const H3 = styled.h3`
    border-bottom: 1px solid ${props => props.theme.color};
    margin-left: 30px;
    margin-bottom: 8px;
    padding-bottom: 2px;
    display: inline-block;
    min-width: 40%;
    font-size: 18px;
    text-align: center;

    @media(max-width: 600px) {
        font-size: 14px;
        margin-left: 50px;
    }
`

const P = styled.p`
    font-size: 14px;

    @media(max-width: 600px) {
        font-size: 10px;
    }
`