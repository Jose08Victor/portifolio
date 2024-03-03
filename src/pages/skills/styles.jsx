import styled from "styled-components";

export const Main = styled.main`
    margin: 15px;
    width: 100%;
`

export const H1 = styled.h1`
    text-align: center;
    font-size: 30px;
    margin-bottom: 45px;
    
    @media(min-width: 1450px) {
        font-size: 35px;
        margin-bottom: 60px;
    }

    @media(max-width: 600px) {
        font-size: 21px;
    }
`

export const Ul = styled.ul`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 10px;
    margin-bottom: 30px;
    
    @media(min-width: 1450px) {
        gap: 30px;
        margin-bottom: 45px;
    }

    @media(max-width: 400px) {
        gap: 15px;
        margin-bottom: 18px;
    }

    li {
        &:hover {
            transform: scale(1.15);  

            h3 {
                border-color: ${props => props.theme.color};
            }   
        }

        svg {
            width: 51px;
            fill: ${props => props.theme.color};
            margin-bottom: 8px;
        }

        &.active {
            transform: scale(1.28);

            svg {
                border: 1px solid ${props => props.theme.color};
                padding: 8px;
                transform: scale(1.35);
            }

            h3 {
                border-bottom: 1px solid ${props => props.theme.color};
                transform: scale(1.1);
            }
        }

        @media(min-width: 1450px) {
            width: 220px;

            svg {
                width: 70px;
                margin-bottom: 18px;
            }
        }

        @media(max-width: 600px) {
            width: 85px;

            svg {
                width: 35px;
                margin-bottom: 4px;
            }
        }
    }
`

export const Li = styled.li`
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in-out transform;
    cursor: pointer;
`

export const H3 = styled.h3`
    border-bottom: 1px solid transparent;
    margin: 5px 0;
    padding-bottom: 2px;
    font-size: 15px;
    text-align: center;

    @media(min-width: 1450px) {
        font-size: 20px;
    }

    @media(max-width: 600px) {
        font-size: 13px;
    }
`

export const Div = styled.div`
    border: 2px solid ${props => props.theme.color};
    max-width: 700px;
    min-height: 86px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    font-size: 17px;

    @media(min-width: 1450px) {
        max-width: 750px;
        font-size: 19px;
        padding: 15px;
    }
    
    @media(max-width: 600px) {
        font-size: 11px;
        min-height: 74px;
        margin: 0 18px;
    }
`