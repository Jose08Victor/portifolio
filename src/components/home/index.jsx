import styled from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { Header } from "../header"
import { Footer } from "../footer"
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";
import josePhoto from "../../assets/jose-victor.jpg"

export const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Header />
            <Main>
                <Description>
                    <Span1>Olá ✌️, </Span1>
                    <H1>Sou o José Victor Desenvolvedor Web <Span2 theme={theme}>|</Span2> Front-End</H1>

                    <P>
                    Comecei a me interessar pela programação participando de eventos online. Desde junho de 2023, tenho dedicado meu tempo ao estudo e estou em busca da minha primeira oportunidade na área de front-end.
                    </P>

                    <P> Gosto MUITO da área de tecnologia e tenho certeza que minhas habilidades podem agregar valor a qualquer equipe. Como profissional dedicado e em constante evolução no campo da tecnologia, estou continuamente em busca de novas oportunidades para aprender e enriquecer minhas experiências.
                    </P>

                    <Div1 theme={theme}>
                        <a href="https://drive.google.com/file/d/1ygg0hEtdHcLS86A0rY7B1BbEGrwXr7sO/view?usp=drive_link" target="_blank">Veja o meu CV</a>

                        <Hr theme={theme}
                            onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                            onMouseOut={() => setTheme({ ...theme, opacity: .6 })} />
                    </Div1>
                </Description>

                <Div2 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                    onMouseOut={() => setTheme({ ...theme, opacity: .6 })}>
                    <Img theme={theme} src={josePhoto} alt="img" />
                </Div2>
            </Main>

            <Footer />
        </>
    )
}

const Main = styled.main`
    display: flex;
    margin: 10px auto;
    max-width: 75%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    @media (max-width: 600px) { 
        max-width: 96%;
    }

    @media (max-width: 1210px) {      
        justify-content: center;
    }

    @media (min-width: 1450px) {      
        max-width: 60%;
    }
`

const Description = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1210px) {      
        width: 90%;
    }

    @media (max-width: 416px) { 
        width: 97%;
    }
`

const Span1 = styled.span`
    font-size: 20px;

    @media (max-width: 566px) { 
        font-size: 14.2px;
    }
`

const H1 = styled.h1`
    max-width: 470px;
    margin-bottom: 20px;

    @media (max-width: 566px) { 
        font-size: 24px;
        max-width: 360px;  
    }

    @media (max-width: 390px) { 
        font-size: 20px;
        max-width: 305px;
        margin-bottom: 16px;
    }
`

const Span2 = styled.span`
    color: ${props => props.theme.color};
`

const P = styled.p`
    line-height: 24px;
    margin-bottom: 20px;

    @media (max-width: 566px) { 
        font-size: 12.5px;
        line-height: 22px;
        margin-bottom: 15px;
    }
`

const Div1 = styled.div`
 a {
    padding:0 0 8px 8px;
    display: inline-block;
    transition: .3s ease-in-out;

    &:hover {
        color: ${props => props.theme.color};
        transform: scale(1.1);
    }
 }

 @media (max-width: 566px) { 
    font-size: 13px;
 }
`

const Hr = styled(DefaultHr)`
    width: 120px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media (max-width: 566px) { 
        width: 105px;
     }
`

const Div2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.color};
    width: 258px;
    height: 258px;
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;

    @media (max-width: 1210px) {      
        display: none;
    }

    @media (min-width: 1900px) {
        width: 338px;
        height: 338px;
    }
`

const Img = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;

    @media (min-width: 1900px) {
        width: 330px;
        height: 330px;
    }
`