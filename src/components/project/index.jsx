import styled, { css } from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { useContext } from "react"
import { ThemeContext } from "../../theme-context"
import { useLocation } from "react-router-dom"
import { projectData } from "../../data"

export const Project = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const { state } = useLocation()

    return (
        <>
            <Details>
                <H1>{state ? state.title : projectData[0].title}</H1>

                <Div>
                    <Pc src={state ? state.desktopImage : projectData[0].desktopImage} alt="Computador" />
                    <Diva>
                        <Cellphone src={state ? state.mobileImage : projectData[0].mobileImage} alt="Celular" />
                        <Divo>
                            <div>
                                <A className="site" href={state ? state.site : projectData[0].site} target="_blank" theme={theme}><p>View Site</p></A>

                                <Hr3 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                                    onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />
                            </div>
                            <div>
                                <A href={state ? state.github : projectData[0].github} target="_blank" theme={theme}><p>Github</p></A>

                                <Hr3 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                                    onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />
                            </div>
                        </Divo>
                    </Diva>
                </Div>

                <P>{state ? state.description : projectData[0].description}</P>
            </Details>
        </>
    )
}

const Hr3 = styled(DefaultHr)`
    width: 100%;
    margin-top: 3px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`

const Details = styled.div`
    width: 60%;
`

const H1 = styled.h1`
    text-align: center;
    margin-bottom: 20px;

    @media(min-width: 1450px) {
        margin-bottom: 50px;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 80px;
    margin-bottom: 15px;
    position: relative;
`

const Pc = styled.img`
    width: 52%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`

const Diva = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 112px;
  align-items: center;
  justify-content: space-around;
`

const Cellphone = styled.img`
    width: 100%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`

const Divo = styled.div`
    width: 135%;
    display: flex;
    justify-content: space-between;

    ${props => !props.children[0].props.children[0].props.href && css `    
        justify-content: center;           
    `}
`

const A = styled.a`

    p{
        transition: .3s ease-in-out;
    
        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color}; 
        }
    }

    ${props => !props.href && css `    
        display: none;           
    `}
`

const P = styled.p`
    margin-bottom: 10px;
`