import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*,*::before,*:after<
margin: 0;
padding: 0;
border: none;
background-color: red;
font-family: "Roboto", sans-sarif;
box-sizing: border-box !important;
-webkit-box-sizing: border-box !important;
-moz-box-sizing: border-box !important;
-ms-box-sizing: border-box !important;
>

::-webkit-scrollbar<
width: 9;
background: transperant;
>

-ms-overflow-style: none;
scrollbar-width: none;

&::-webkit-scrollbar<
display:none;
>

`

export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
overflow: Hidden;
`;