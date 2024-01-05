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
                    Gosto MUITO da área de tecnologia e tenho certeza que minhas habilidades podem agregar valor a qualquer equipe. Como profissional dedicado e em constante evolução no campo da tecnologia, estou continuamente em busca de novas oportunidades para aprender e enriquecer minhas experiências. Estou entusiasmado em enfrentar projetos desafiadores e colaborativos, onde possa não apenas aplicar meu conhecimento existente, mas também crescer e desenvolver novas habilidades. Minha vontade é contribuir ativamente para o progresso e a inovação, sempre aberto a desafios que me permitam expandir meus limites e conquistar novos patamares.
                    </P>

                    <Div1 theme={theme}>
                        <a href="#">Veja o meu CV</a>

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
        max-width: 95%;
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
`

const Span1 = styled.span`
    font-size: 20px;

    @media (max-width: 566px) { 
        font-size: 16px;
    }
`

const H1 = styled.h1`
    max-width: 470px;
    margin-bottom: 20px;

    @media (max-width: 566px) { 
        font-size: 25px;
        max-width: 370px;
    }

    @media (max-width: 439px) { 
        max-width: 300px;
    }
`

const Span2 = styled.span`
    color: ${props => props.theme.color};
`

const P = styled.p`
    line-height: 24px;
    margin-bottom: 20px;

    @media (max-width: 566px) { 
        font-size: 14px;
        line-height: 22px;
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
    font-size: 14.5px;
 }
`

const Hr = styled(DefaultHr)`
    width: 120px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media (max-width: 566px) { 
        width: 114px;
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
`

const Img = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;
`