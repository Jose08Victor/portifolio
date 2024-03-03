import styled from "styled-components";
import { DefaultHr } from "../Default-Hr";

export const HeadeR = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    width: 75%;
        
    @media (min-width: 1450px) {
        margin-bottom: 60px;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 20px;

    a {
        font-size: 24px;
        transition: .3s ease-in-out;
        
        &:hover {
            transform: scale(1.1);
            color: ${props => props.theme.color};
        }

        &.active {
            color: ${props => props.theme.color};
            transform: scale(1.28);

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media (max-width: 600px) {
        gap: 10px;
        a {
            font-size: 17px;
            
            &.active {
                transform: scale(1.15);
            }
        }
    }

    @media (max-width: 475px) {
        a {
            font-size: 15px;

            &.active {
                transform: scale(1.1);
            }
        }
    }
`

export const Logo = styled.img`
    transition: .4s ease-in-out;
    background: linear-gradient(45deg, ${props => props.theme.color} 25%, ${props => props.theme.color} 50%, ${props => props.theme.color} 75%, ${props => props.theme.color} 100%) center no-repeat;
    background-size: 80px 80px;
    cursor: pointer;

    &:hover {
        transform: scale(1.24);
    }   
    
    @media (max-width: 600px) {
        width: 80px;
        height: 80px;
        background-size: 60px 60px;

        &:hover {
            transform: scale(1.05);
        }
    }
`

export const Hr = styled(DefaultHr)`
    width: 50%;
    background: ${props => props.theme.color};
    opacity: ${props => props.theme.opacity};

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 520px) {
        width: 96%;
    }
`