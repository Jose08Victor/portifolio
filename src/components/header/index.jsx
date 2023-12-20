import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <Header1>
            <Div>
                <a href="#">PROJETOS</a>
                <Hr />
            </Div>

            <Logo src={logo} alt="Logo" />

            <Div>
                <a href="#">HABILIDADES</a>
                <Hr />
            </Div>
        </Header1>
    )
}

const Header1 = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    width: 75%;
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

const Hr = styled.hr`
    width: 190px;
    margin: 0 auto;
    height: 2px;
    background: linear-gradient(45deg, rgba(255, 255, 0, 1) 25%, rgba(0, 219, 255, 1) 50%, rgba(255, 255, 0, 1) 75%, rgba(0, 219, 255, 1) 100%);
    border: none;
    opacity: .8;
    border-radius: 10px;
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
