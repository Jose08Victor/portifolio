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

                <Div1>
                    <Pc src={state ? state.desktopImage : projectData[0].desktopImage} alt="Computador" />
                    <Div2>
                        <Cellphone src={state ? state.mobileImage : projectData[0].mobileImage} alt="Celular" />
                        <Div3>
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
                        </Div3>
                    </Div2>
                </Div1>

                <P>{state ? state.description : projectData[0].description}</P>
            </Details>
        </>
    )
}

const Details = styled.div`
    width: 60%;

    @media(max-width: 950px) {
        width: 95%;
    }
`

const H1 = styled.h1`
    text-align: center;
    margin-bottom: 20px;

    @media(min-width: 1450px) {
        margin-bottom: 50px;
    }

    @media(max-width: 560px) {
        font-size: 25px;
        margin-bottom: 0px;
    }
`

const Div1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 15px;
    position: relative;

    @media(max-width: 620px) {
        gap: 30px;
        margin-bottom: 0px;
    }
`

const Pc = styled.img`
    width: 52%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 1250px) {
        width: 62%;
    }

    @media(max-width: 560px) {
        max-width: 200px;
    }

    @media(max-width: 370px) {
        width: 143px;
    }
`

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 112px;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 560px) {
    justify-content: center;
    gap: 20px;
    height: 250px;
}

@media(max-width: 400px) {
    width: 50px;
    height: 200px;
}

`

const Cellphone = styled.img`
    width: 88%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 1250px) {
        width: 70%;
    }

    @media(max-width: 560px) {
        max-width: 50px;
    }
`

const Div3 = styled.div`
    width: 135px;
    display: flex;
    justify-content: space-between;
    

    ${props => !props.children[0].props.children[0].props.href && css `    
        justify-content: center;           
    `}

    @media(max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-size: 14px;
    }
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

const Hr3 = styled(DefaultHr)`
    width: 100%;
    margin-top: 3px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`

const P = styled.p`
    margin-bottom: 10px;

    @media(max-width: 560px) {
        font-size: 13px;
        margin-bottom: 0px;
        line-height: 16.5px;
    }
`