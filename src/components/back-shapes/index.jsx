import styled from "styled-components"
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export const BackgroundShapes = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <BoxOne theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})} onMouseOut={ () => setTheme({...theme, opacity: .6})}></BoxOne>
            <BoxTwo theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})} onMouseOut={ () => setTheme({...theme, opacity: .6})}></BoxTwo>
            <BoxThree theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})} onMouseOut={ () => setTheme({...theme, opacity: .6})}></BoxThree>
            <BoxFour theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})} onMouseOut={ () => setTheme({...theme, opacity: .6})}></BoxFour>
        </>
    )
}

const Div = styled.div`
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, ${props => props.theme.color} 25%, ${props => props.theme.color} 50%, ${props => props.theme.color} 75%, ${props => props.theme.color} 100%);
    opacity: ${props => props.theme.opacity};
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