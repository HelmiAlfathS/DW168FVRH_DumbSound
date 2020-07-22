import { createGlobalStyle } from 'styled-components';

import productsans from '../assets/font/productsans.woff2';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Product Sans';
        src: local('Open Sans'), local('OpenSans'),
        url(${productsans}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @import "~video-react/styles/scss/video-react";
    
    body{
      background-color: black;
    }
`;
export default GlobalStyle;