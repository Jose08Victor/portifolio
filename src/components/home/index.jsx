import styled from "styled-components"
import { DefaultHr } from "../Default-Hr"
import { Header } from "../header"
import { Footer } from "../footer"
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            < Header />
            <Main>
                <Description>
                    <h3>Olá ✌️, </h3>
                    <H1>Sou o José Victor Desenvolvedor Web <Span theme={theme}>|</Span> Front-End</H1>

                    <P>
                        Gosto MUITO da área de tecnologia, e tenho
                        certeza que posso contribuir em qualquer time com as minhas habilidades.
                        Como profissional em constante evolução na área de tecnologia, estou sempre em busca de novas oportunidades
                        para aprender e expandir minhas experiências. Estou aberto a projetos desafiadores e colaborativos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sunt ducimus iusto nesciunt pariatur impedit! Vitae nulla a culpa repudiandae, atque ipsam ab fugit dolorem ipsum illo porro harum magnam.
                    </P>

                    <Div theme={theme}>
                        <a href="#">Veja o meu CV</a>

                        <Hr theme={theme} 
                        onMouseOver={ () => setTheme({...theme, opacity: 1})}
                        onMouseOut={ () => setTheme({...theme, opacity: .6})} />
                    </Div>
                </Description>
                <T theme={theme} onMouseOver={ () => setTheme({...theme, opacity: 1})}
                        onMouseOut={ () => setTheme({...theme, opacity: .6})}>
                    <Img theme={theme} src="https://placeholder.com/250x250" alt="img" />
                </T>
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
    margin-bottom: 50px;

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

const H1 = styled.h1`
    max-width: 470px;
    margin-bottom: 20px;
`

const Span = styled.span`
    color: ${props => props.theme.color};
`

const P = styled.p`
    line-height: 25px;
    margin-bottom: 20px;
`

const Div = styled.div`
 a {
    padding:0 0 8px 8px;
    display: inline-block;
    transition: .3s ease-in-out;

    &:hover {
        color: ${props => props.theme.color};
        transform: scale(1.1);
    }
 }
`

const Hr = styled(DefaultHr)`
    width: 120px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`

const T = styled.div`
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
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;
`