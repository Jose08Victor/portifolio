import styled from "styled-components"
import { ThemeContext, themes } from '../../theme-context';
import { useContext } from "react";

export const BackgroundShapes = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <BoxOne theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}></BoxOne>
            <BoxTwo theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}></BoxTwo>
            <BoxThree theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}></BoxThree>
            <BoxFour theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}></BoxFour>
        </>
    )
}

const Div = styled.div`
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, ${props => props.theme.primary} 25%, ${props => props.theme.secondary} 50%, ${props => props.theme.primary} 75%, ${props => props.theme.secondary} 100%);
    position: absolute;
`

const BoxOne = styled(Div)`
    top: 0;
`

const BoxTwo = styled(Div)`
    top: 0;
    right: 0;
`

const BoxThree = styled(Div)`
    bottom: -1vh;
`

const BoxFour = styled(Div)`
    bottom: -1vh;
    right: 0;
`