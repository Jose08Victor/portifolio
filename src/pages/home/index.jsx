import { Footer } from "../../components/footer";
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";
import josePhoto from "../../assets/jose-victor.jpg";
import { Main, Description, Span1, H1, Span2, P, Div1, Hr, Div2, Img } from "./styles";

export const Home = () => {
    const { theme, changeOpacity } = useContext(ThemeContext)

    return (
        <>
            <Main>
                <Description>
                    <Span1>Olá ✌️, </Span1>
                    <H1>Sou o José Victor Desenvolvedor Web <Span2 theme={theme}>|</Span2> Front-End</H1>

                    <P>Comecei a me interessar pela programação participando de eventos online. Desde junho de 2023, tenho dedicado meu tempo ao estudo e estou em busca da minha primeira oportunidade na área de front-end.</P>

                    <P>Passei a gostar MUITO da área de tecnologia e tenho certeza que minhas habilidades podem agregar valor a qualquer equipe. Como profissional dedicado e em constante evolução no campo da tecnologia, estou continuamente em busca de novas oportunidades para aprender e enriquecer minhas experiências.</P>

                    <Div1 theme={theme}>
                        <a href="https://drive.google.com/file/d/1ygg0hEtdHcLS86A0rY7B1BbEGrwXr7sO/view?usp=drive_link" target="_blank">Veja o meu CV</a>

                        <Hr theme={theme}
                            onMouseOver={changeOpacity}
                            onMouseOut={changeOpacity} />
                    </Div1>
                </Description>

                <Div2 theme={theme} onMouseOver={changeOpacity}
                    onMouseOut={changeOpacity}>
                    <Img theme={theme} src={josePhoto} alt="img" />
                </Div2>
            </Main>

            <Footer />
        </>
    )
}