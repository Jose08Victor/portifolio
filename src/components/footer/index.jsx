import styled from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { SocialMediasIcons } from "../social-media-icons"
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <FooteR>
      <SocialMediasIcons />
      <Hr theme={ theme } 
        onMouseOver={ () => setTheme({...theme, opacity: 1})}
        onMouseOut={ () => setTheme({...theme, opacity: .6})}/>
    </FooteR>
  )
}

const FooteR = styled.footer`
  margin-bottom: 20px;
`

const Hr = styled(DefaultHr)`
   margin-top: 30px;
   width: 300px;
   background: ${props => props.theme.color};
   opacity: ${props => props.theme.opacity};
`