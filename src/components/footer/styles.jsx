import styled from "styled-components";
import { DefaultHr } from "../Default-Hr";

export const FooteR = styled.footer`
  margin-bottom: 25px;
`

export const Hr = styled(DefaultHr)`
  margin-top: 30px;
  width: 300px;
  background: ${props => props.theme.color};
  opacity: ${props => props.theme.opacity};

  @media (max-width: 425px) {
    width: 235px;
    margin-top: 15px;
  }
`