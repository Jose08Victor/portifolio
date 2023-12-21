import styled from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { SocialMediasIcons } from "../social-media-icons"

export const Footer = () => {
  return (
    <FooteR>
      <SocialMediasIcons />
      <Hr />
    </FooteR>
  )
}

const FooteR = styled.footer`
  margin-bottom: 20px;
`

const Hr = styled(DefaultHr)`
   margin-top: 30px;
   width: 300px;
`