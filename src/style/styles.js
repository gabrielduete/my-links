import { keyframes, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Global Settings
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap');

    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    body{
        background: #171616;
        font-family: 'Hind Siliguri', sans-serif;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        "::-webkit-scrollbar-track": {
            boxShadow: "nset 0 0 6px grey",
            borderRadius: "5px"
        },
        "::-webkit-scrollbar-thumb": {
            background: darkBlue,
            borderRadius: "15px",
            height: "2px"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: lightBlue,
            maxHeight: "10px"
        },
        "::-webkit-scrollbar-button:vertical:start:decrement": {
            background: 'red',
            display: "block",
            backgroundSize: "10px"
        },
        "::-webkit-scrollbar-button:vertical:end:increment": {
            display: "block",
            background: 'red',
            backgroundSize: "10px"
        },
    }
`

// Animations
const apeach = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`

// Container
export const WrapperAll = styled.div`
  animation: ${apeach} 3s linear;
`

export const Wrapper = styled.section`
    width: 100%;
    margin: 10% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 900px){
        margin: 20% 0%;
    }
`
// Header
export const HeaderBG = styled.header`
    animation: ${apeach} 3s linear;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-child(1){
        width: 20%;
        display: flex;
        align-items: flex-end;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-itens: flex-start;
        justify-content: flex-start;
        margin-left: 2%;
    }
    div{
        margin-bottom: 3%;
    }
    span{
        font-size: 0.90em;
        align-self: flex-end;
        color: #BFB8B8;
    }
`

export const Image = styled.img`
    width: 100%;
    border-radius: 50%;
`

export const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
`

// Main - Links
export const WrapperButtonsBG = styled.main`
    animation: ${apeach} 3s linear;
    width: 250px;
    height: 250px;
    border-radius: 2px;
    overflow: auto;
    padding: 10px 20px;
    border: 2px solid white;
    &::-webkit-scrollbar{
        background: #2B2929;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #BFB8B8;
    }
`

export const Link = styled.div`
    width: 100%;
    height: 40px;
    cursor: pointer;
    background: #606060;
    border: none;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0px;
    outline: none;
    transition-duration: 0.60s;
    position: relative;
    &:hover{
            background: white;
            p, i{
                color: #606060;
            }
    }
    i{
        position: absolute;
        left: 5%
    }
`