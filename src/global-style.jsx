
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = () => {
 return <Reset />

}
 const Reset = createGlobalStyle`
 * {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 color: rgba(195, 195, 195, 1);
 font-family: 'Rubik', sans-serif;
 font-weight: 400;

 a {
     text-decoration: none;
 }

 ul {
     list-style: none;
 }
}

body {
 position: relative;
 display: flex;
 align-items: center;
 background-color: #222;
}
 ` 