import { FooteR, Hr } from "./styles"
import { SocialMediasIcons } from "../social-media-icons";
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export const Footer = () => {
  const { theme, changeOpacity } = useContext(ThemeContext)

  return (
    <FooteR>
      <SocialMediasIcons />
      <Hr theme={ theme } onMouseOver={changeOpacity} onMouseOut={changeOpacity}/>
    </FooteR>
  )
}