import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { DefaultHr } from "../Default-Hr";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from '../../theme-context';
import { useContext } from "react";

export const Header = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <HeadeR>
            <Div theme={theme}>
                <Link to={'/projects'}>PROJETOS</Link>
                <Hr theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}/>
            </Div>

            <Link to={'/portifolio'}><Logo src={logo} alt="Logo" theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}}  onMouseOut={() =>{setTheme(themes.light)}} /></Link>

            <Div theme={theme}>
            <Link to={'/skills'}>HABILIDADES</Link>
                <Hr theme={theme} onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}/>
            </Div>
        </HeadeR>
    )
}

const HeadeR = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    width: 75%;

    @media (min-width: 1450px) {
        margin-bottom: 60px;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

   a {
    font-size: 24px;
    transition: .3s ease-in-out;
   }

   a:hover {
    transform: scale(1.1);
    color: ${props => props.theme.secondary};
   }
`

const Logo = styled.img`
    transition: .4s ease-in-out;
    background: linear-gradient(45deg, ${props => props.theme.primary} 25%, ${props => props.theme.secondary} 50%, ${props => props.theme.primary} 75%, ${props => props.theme.secondary} 100%) center no-repeat;
    background-size: 80px 80px;
    cursor: pointer;

    &:hover {
        transform: scale(1.24);
    }    
`

const Hr = styled(DefaultHr)`
width: 190px;
background: linear-gradient(45deg, ${props => props.theme.primary} 25%, ${props => props.theme.secondary} 50%, ${props => props.theme.primary} 75%, ${props => props.theme.secondary} 100%);
`