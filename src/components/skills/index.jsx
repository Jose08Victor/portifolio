import styled from "styled-components"

export const Skills = () => {
    return (
        <Main>
            <H1>Linguagens e Ferramentas</H1>

<Tools>
            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            <Div>
                <H3>JavaScript</H3>
                <Img src="https://placeholder.com/60" />
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum? Corporis, ex adipisci explicabo veritatis dignissimos consectetur delectus aliquid harum.</P>
            </Div>

            </Tools>
        </Main>
    )
}

const Main = styled.main`
    margin: 20px;
    width: 100%;
`

const H1 = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    color:rgba(0, 219, 255, 1);

    @media(min-width: 1450px){
        margin-bottom: 60px;
    }
`

const Tools = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    
    @media(min-width: 1450px){
        margin-bottom: 60px;
        gap: 30px;
    }
`

const Div = styled.div`
    max-width: 300px;

    @media(min-width: 1450px){
        max-width: 400px;
    }
`

const Img = styled.img`
    float: left;
    margin-right: 10px;
    transition: .3s ease-in-out;

    &:hover {
    transform: scale(1.1);
    }
`

const H3 = styled.h3`
    text-align: center;
    margin-bottom: 8px;
    color: rgba(255, 255, 0, 1);
`

const P = styled.p`
    font-size: 15px;
`