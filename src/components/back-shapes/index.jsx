import styled from "styled-components"

export const BackgroundShapes = () => {
    return (
        <>
            <BoxOne></BoxOne>
            <BoxTwo></BoxTwo>
            <BoxThree></BoxThree>
            <BoxFour></BoxFour>
        </>
    )
}

const Div = styled.div`
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, rgba(255, 255, 0, 1) 25%, rgba(0, 219, 255, 1) 50%, rgba(255, 255, 0, 1) 75%, rgba(0, 219, 255, 1) 100%);
    position: absolute;
`

const BoxOne = styled(Div)`
    top: 0;
`

const BoxTwo = styled(Div)`
    top: 0;
    right: 0;
`

const BoxThree = styled(Div)`
    bottom: -1vh;
`

const BoxFour = styled(Div)`
    bottom: -1vh;
    right: 0;
`