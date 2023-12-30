import styled from "styled-components"
import { ThemeContext, themes } from './theme-context';
import { useContext } from "react";
import { data } from "./data";

export const Hahai = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Div theme={theme} onClick={() => { themes.index++
            setTheme({...theme, color: themes.colors[themes.index < themes.colors.length ? themes.index : themes.index = 0]}) 
            }}>
            </Div>

<h1>{data[1].title}</h1>
            <Div theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})} onMouseOut={ () => setTheme({...theme, opacity: .6})}>
            </Div>
            <img src={data[1].mobileImage}/>
{console.log()}

        </>
    )
}

const Div = styled.div`
 width: 200px;
 height: 200px;
 background: ${props => props.theme.color};
 opacity: ${props => props.theme.opacity};
 `