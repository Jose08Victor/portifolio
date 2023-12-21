import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { DefaultHr } from "../Default-Hr";

export const Header = () => {
    return (
        <HeadeR>
            <Div>
                <a href="#">PROJETOS</a>
                <DefaultHr />
            </Div>

            <Logo src={logo} alt="Logo" />

            <Div>
                <a href="#">HABILIDADES</a>
                <DefaultHr />
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
    color: rgba(0, 219, 255, 1);
   }
`

const Logo = styled.img`
    transition: .4s ease-in-out;
    background: linear-gradient(45deg, rgba(255, 255, 0, 1) 25%, rgba(0, 219, 255, 1) 50%, rgba(255, 255, 0, 1) 75%, rgba(0, 219, 255, 1) 100%) center no-repeat;
    background-size: 80px 80px;
    cursor: pointer;

    &:hover {
        transform: scale(1.24);
        background-image: linear-gradient(45deg, rgba(0, 219, 255, 1) 25%, rgba(255, 255, 0, 1) 50%, rgba(0, 219, 255, 1) 75%, rgba(255, 255, 0, 1) 100%);
    }    
`