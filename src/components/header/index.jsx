import { HeadeR, Div, Hr, Logo } from "./styles"
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export const Header = () => {
    const { theme, changeColor, changeOpacity } = useContext(ThemeContext)

    return (
        <HeadeR>
            <Div theme={theme}>
                <NavLink to={'/projects'} onClick={changeColor} > PROJETOS </NavLink>

                <Hr theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />
            </Div>

            <NavLink to={'/portifolio'}>
                <Logo src={logo} alt="Logo" theme={theme} onClick={changeColor}
                    onMouseOver={changeOpacity} onMouseOut={changeOpacity} />
            </NavLink>

            <Div theme={theme}>
                <NavLink to={'/skills'} onClick={changeColor}> HABILIDADES </NavLink>

                <Hr theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity} />
            </Div>
        </HeadeR>
    )
}