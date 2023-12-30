import styled from "styled-components"
import pc from "../../assets/pokemon-project.png"
import cellphone from "../../assets/pokemon-mobile.png"
import { DefaultHr } from "../Default-Hr"
import { useContext } from "react"
import { ThemeContext } from "../../theme-context"

export const Project = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <Details>
                    <H1>Pokemon Research</H1>

                    <Div>
                        <Pc src={pc} alt="Computador" />
                        <Diva>
                            <Cellphone src={cellphone} alt="Celular" />
                            <Divo>
                            <div>
                                <A href="#" theme={theme}><p>View Site</p></A>

                                <Hr3 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                        onMouseOut={() => setTheme({ ...theme, opacity: .6 })}/>
                            </div>
                            <div>
                                <A href="#" theme={theme}><p>Github</p></A>

                                <Hr3 theme={theme} onMouseOver={() => setTheme({ ...theme, opacity: 1 })}
                        onMouseOut={() => setTheme({ ...theme, opacity: .6 })}/>
                            </div>
                            </Divo>
                        </Diva>
                    </Div>

                    <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptatem rerum eius explicabo ut non nostrum placeat eaque, optio laborum eos laudantium, est numquam! Ab ad nostrum aliquam obcaecati veniam?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quisquam hic similique soluta deleniti! Odit tempore architecto sed perspiciatis minus dicta cumque error praesentium, saepe ea. Laborum quas ea dolor!
                    </P>
                </Details>
    )
}

const Hr3 = styled(DefaultHr)`
    width: 100%;
    margin-top: 3px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
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
    width: 52%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`

const Diva = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 112px;
  align-items: center;
  justify-content: space-around;
`

const Cellphone = styled.img`
    width: 100%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`

const Divo = styled.div`
    width: 135%;
    display: flex;
    justify-content: space-between;
`

const A = styled.a`
    p{
        transition: .3s ease-in-out;
    
        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color}; 
        }
    }
`
    
const P = styled.p`
margin-bottom: 10px;
`