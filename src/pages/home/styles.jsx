import styled from "styled-components";
import { DefaultHr } from "../../components/Default-Hr";

export const Main = styled.main`
    display: flex;
    margin: 10px auto;
    max-width: 80%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 35px;

    @media (max-width: 600px) { 
        max-width: 96%;
    }

    @media (max-width: 980px) {      
        justify-content: center;
    }

    @media (min-width: 1450px) {      
        max-width: 60%;
    }
`

export const Description = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: 980px) {      
        width: 90%;
    }

    @media (max-width: 416px) { 
        width: 97%;
    }
`

export const Span1 = styled.span`
    font-size: 20px;

    @media (max-width: 566px) { 
        font-size: 14.2px;
    }
`

export const H1 = styled.h1`
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

export const Span2 = styled.span`
    color: ${props => props.theme.color};
`

export const P = styled.p`
    line-height: 24px;
    margin-bottom: 20px;

    @media (max-width: 566px) { 
        font-size: 12.5px;
        line-height: 22px;
        margin-bottom: 15px;
    }
`

export const Div1 = styled.div`
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

export const Hr = styled(DefaultHr)`
    width: 120px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media (max-width: 566px) { 
        width: 105px;
     }
`

export const Div2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.color};
    width: 228px;
    height: 318px;
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;

    @media (max-width: 980px) {      
        display: none;
    }

    @media (min-width: 1900px) {
        width: 278px;
        height: 378px;
    }
`

export const Img = styled.img`
    width: 220px;
    height: 310px;
    border-radius: 25px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;

    @media (min-width: 1900px) {
        width: 270px;
        height: 370px;
    }
`