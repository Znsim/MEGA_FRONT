import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
 ${reset}

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body{
    font-family: "Pretendard", sans-serif;
    color: #222;
    
 }
 input{
   display: none;
 }

 a{
    text-decoration: none;
    color: #222;
 }

 ul,li{
    list-style: none;
 }

 img{
   border: 0;
   display: block;
 }


`;
