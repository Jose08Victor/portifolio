import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    margin: 15px auto;

    @media (max-width: 425px) {
      width: 220px;
      margin: auto;
      }
`

export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;

    @media (max-width: 425px) {
      width: 30px;
      height: 30px;
    }
`

export const Icon = styled.svg`
    background: linear-gradient(45deg, ${props => props.theme.color} 0%, ${props => props.theme.color} 100%) center no-repeat;
    background-size: 27px 27px;
    fill: #181818;
    cursor: pointer;
    width: 29px;
    height: 31px;
    transition: .3s ease-in-out;
    opacity: .6;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
  }

  @media (max-width: 425px) {
    width: 23px;
    height: 25px;
    background-size: 21px 21px;
    }
`

export const EmailIcon = styled(Icon)`
    width: 28px;
    height: 24px;
    background-size: 30px 30px;
    border-radius: 5px;

    &:hover {
       transform: scale(1.15);
    }
    
    @media (max-width: 425px) {
      width: 23px;
      height: 18px;
    }
`