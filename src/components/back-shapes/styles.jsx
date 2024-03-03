import styled from "styled-components";

export const Div = styled.div`
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, ${props => props.theme.color} 25%, ${props => props.theme.color} 50%, ${props => props.theme.color} 75%, ${props => props.theme.color} 100%);
    opacity: ${props => props.theme.opacity};
    position: absolute;

    @media(max-width: 600px) {
        width: 120px;
        height: 120px;
    }
`

export const BoxOne = styled(Div)`
    top: 0;
`

export const BoxTwo = styled(Div)`
    top: 0;
    right: 0;
`

export const BoxThree = styled(Div)`
    bottom: -1vh;
`

export const BoxFour = styled(Div)`
    bottom: -1vh;
    right: 0;
`