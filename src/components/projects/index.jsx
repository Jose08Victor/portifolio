import pc from "../../assets/pokemon-project.png"
import cellphone from "../../assets/pokemon-mobile.png"
import styled from "styled-components"
import { SocialMediasIcons } from "../social-media-icons"
import { DefaultHr } from "../Default-Hr"
import { Header } from "../header"
import { ThemeContext, themes } from "../../theme-context"
import { useContext } from "react"

export const Projects = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Header />
            <Main>
                <Titles>
                    <a href="#"><H2>Pokemon Research</H2></a>
                    <a href="#"><H2>Desenvolvedor web Front End</H2></a>
                    <a href="#"><H2>Desenvolvedor</H2></a>
                    <a href="#"><H2>Desenvolvedor web Front</H2></a>
                    <a href="#"><H2>Desenvolvedor web</H2></a>

                    <Hr1 theme={ theme } onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}/>

                    <SocialMediasIcons />
                </Titles>

                <Hr2 theme={ theme } onMouseOver={() =>{setTheme(themes.light.reverse)}} onMouseOut={() =>{setTheme(themes.light)}}/>

                <Details>
                    <H1>Pokemon Research</H1>

                    <Div>
                        <Pc src={pc} alt="Computador" />
                        <Cellphone src={cellphone} alt="Celular" />
                    </Div>

                    <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptatem rerum eius explicabo ut non nostrum placeat eaque, optio laborum eos laudantium, est numquam! Ab ad nostrum aliquam obcaecati veniam?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quisquam hic similique soluta deleniti! Odit tempore architecto sed perspiciatis minus dicta cumque error praesentium, saepe ea. Laborum quas ea dolor!
                    </P>
                </Details>
            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 92%;

    @media(min-width: 1450px) {
        width: 80%
    }
`

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Hr1 = styled(DefaultHr)`
    margin-top: 30px;
    width: 300px;
    background: linear-gradient(45deg, ${props => props.theme.secondary} 25%, ${props => props.theme.primary} 50%, ${props => props.theme.secondary} 75%, ${props => props.theme.primary} 100%);
`
const Hr2 = styled(DefaultHr)`
    margin-top: 30px;
    width: 2px;
    height: 450px;
    background: linear-gradient(45deg, ${props => props.theme.secondary} 25%, ${props => props.theme.primary} 50%, ${props => props.theme.secondary} 75%, ${props => props.theme.primary} 100%);
`

const H2 = styled.h2`
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: rgba(0, 219, 255, 1); 
    }
`

const Details = styled.div`
    width: 60%;
`

const H1 = styled.h1`
    text-align: center;
    margin-bottom: 20px;

    @media(min-width: 1450px) {
        margin-bottom: 50px;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 80px;
    margin-bottom: 15px;
    position: relative;
`

const Pc = styled.img`
    width: 55%;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

const Cellphone = styled.img`
    width: 16%;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

const P = styled.p`
margin-bottom: 10px;
`