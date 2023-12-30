
import styled from "styled-components"
import { SocialMediasIcons } from "../social-media-icons"
import { DefaultHr } from "../Default-Hr"
import { Header } from "../header"
import { ThemeContext, themes } from "../../theme-context"
import { useContext } from "react"
import { Project } from "../project"
import { Link } from "react-router-dom"

export const Projects = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    Header().type.componentStyle.rules = `display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    width: 75%;
    @media (min-width: 1450px) { margin-bottom: 60px; }
    .vem { color: ${theme.color}; transform: scale(1.28);}`

    return (
        <>
            <Header />
            <Main>
                <Titles>
                <Link to={`/projects/2`}><H2 theme={theme} onClick={() => {
                        themes.index++
                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                    }}>Pokemon Research</H2></Link>
                    <a href="#"><H2 theme={theme} onClick={() => {
                        themes.index++
                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                    }}>Desenvolvedor web Front End</H2></a>
                    <a href="#"><H2 theme={theme} onClick={() => {
                        themes.index++
                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                    }}>Desenvolvedor</H2></a>
                    <a href="#"><H2 theme={theme} onClick={() => {
                        themes.index++
                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                    }}>Desenvolvedor web Front</H2></a>
                    <a href="#"><H2 theme={theme} onClick={() => {
                        themes.index++
                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                    }}>Desenvolvedor web</H2></a>

                    <Hr1 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                        onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />

                    <SocialMediasIcons />
                </Titles>

                <Hr2 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                    onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />

                <Project/>
            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 92%;

    @media(min-width: 1450px) {
        width: 80%
    }
`

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Hr1 = styled(DefaultHr)`
    margin-top: 30px;
    width: 300px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`
const Hr2 = styled(DefaultHr)`
    margin-top: 30px;
    width: 2px;
    height: 450px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`

const H2 = styled.h2`
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: ${props => props.theme.color}; 
    }
`