import styled from "styled-components"
import { SocialMediasIcons } from "../social-media-icons"
import { DefaultHr } from "../Default-Hr"
import { Header } from "../header"
import { ThemeContext, themes } from "../../theme-context"
import { useContext } from "react"
import { Project } from "../project"
import { NavLink } from "react-router-dom"
import { data } from "../../data"

export const Projects = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Header />
            <Main theme={theme}>
                <Titles>
                    {
                        data.map((e) => {
                            return (
                                <NavLink to={`/projects/${e.id}`} state={e}>
                                    <h2 onClick={() => {
                                        themes.index++
                                        setTheme({ ...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0] })
                                    }}>{e.title}</h2>
                                </NavLink>
                            )
                        })
                    }

                    <Hr1 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                        onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />

                    <SocialMediasIcons />
                </Titles>

                <Hr2 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                    onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />

                <Project />
            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 92%;

    a h2{
        transition: .3s ease-in-out;
        padding-bottom: 2px;

        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color}; 
        }
    }

    a.active h2 {
        color: ${props => props.theme.color};
        border-bottom: 1px solid ${props => props.theme.color};     
    }

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