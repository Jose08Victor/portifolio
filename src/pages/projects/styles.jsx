import styled, { css } from "styled-components";
import { DefaultHr } from "../../components/Default-Hr";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;

    @media(min-width: 1450px) {
        width: 80%;
    }

    @media(max-width: 950px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 30px;
    }
`

export const Titles = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    gap: 30px;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: center;
    padding: 0 20px;

    &::-webkit-scrollbar {
        width: 2.75px;
        background-color: #223;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color};
    }

    @media(max-width: 950px) {
        gap: 25px;
        height: 250px;
    }

    @media(max-width: 560px) {
        font-size: 12.4px;
        margin: 30px 0 50px;
        height: 210px;
    }
`

export const Li = styled.li`
    h2 {
        transition: .3s ease-in-out;
        cursor: pointer;
        padding-bottom: 2px;
        
        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color};    
        }
        
        &.active {
            border-bottom: 1px solid ${props => props.theme.color}; 
            color: ${props => props.theme.color};
        } 
    }
`

export const Hr1 = styled(DefaultHr)`
    margin: 30px auto;
    width: 300px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media(max-width: 580px) {
        margin-top: 0px;
    }

    @media(max-width: 400px) {
        width: 250px;
    }
`
export const Hr2 = styled(DefaultHr)`
    margin: 30px;
    display: none;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media(max-width: 950px) {
        display: block;
        width: 500px;
        height: 2px;
    }

    @media(max-width: 580px) {
        width: 300px;
        margin: 20px 0px;
    }

    @media(max-width: 400px) {
        width: 250px;
    }
`

export const Details = styled.div`
    width: 72%;

    @media(max-width: 950px) {
        width: 95%;
    }

    @media(min-width: 1450px) {
        width: 60%;
    }
`

export const H1 = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    
    @media(min-width: 1450px) {
        margin-bottom: 50px;
    }

    @media(max-width: 560px) {
        font-size: 24px;
        margin-bottom: 0px;
    }
`
    
export const Div1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-bottom: 15px;
    position: relative;

    @media(max-width: 620px) {
        gap: 30px;
        margin-bottom: 0px;
    }
`

export const Pc = styled.img`
    width: 50%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 560px) {
        max-width: 200px;
    }

    @media(max-width: 370px) {
        width: 143px;
    }
`

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 112px;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 560px) {
        justify-content: center;
        gap: 20px;
        height: 250px;
    }

    @media(max-width: 400px) {
        width: 50px;
        height: 200px;
        gap: 10px;
    }
`

export const Cellphone = styled.img`
    width: 88%;
    transition: .3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 1250px) {
        width: 70%;
    }

    @media(max-width: 560px) {
        max-width: 50px;
    }
`

export const Div3 = styled.div`
    width: 135px;
    display: flex;
    justify-content: space-between;
    
    ${props => !props.children[0].props.children[0].props.href && css`    
        justify-content: center;           
    `}

    @media(max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-size: 13px;
    }
`

export const A = styled.a`
    p {
        transition: .3s ease-in-out;
    
        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color}; 
        }
    }

    ${props => !props.href && css`    
        display: none;           
    `}
`

export const Hr3 = styled(DefaultHr)`
    width: 100%;
    margin-top: 3px;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};
`

export const P = styled.p`
    padding: 0 15px 10px;

    @media(max-width: 560px) {
        font-size: 12px;
        padding: 0 10px 0;
        line-height: 17.5px;
    }
`