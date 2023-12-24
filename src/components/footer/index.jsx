import styled from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { SocialMediasIcons } from "../social-media-icons"
import { ThemeContext, themes } from '../../theme-context';
import { useContext } from "react";

export const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <FooteR>
      <SocialMediasIcons />
      <Hr theme={ theme } onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}/>
    </FooteR>
  )
}

const FooteR = styled.footer`
  margin-bottom: 20px;
`

const Hr = styled(DefaultHr)`
   margin-top: 30px;
   width: 300px;
   background: linear-gradient(45deg, ${props => props.theme.primary} 25%, ${props => props.theme.secondary} 50%, ${props => props.theme.primary} 75%, ${props => props.theme.secondary} 100%);
`