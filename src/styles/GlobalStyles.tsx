import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {NotoSansKR_Black} from '../fonts/font';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html,
  body {
	font-family:'NotoSansKR';
  font-weight: 100;
	font-size: 16px;
  }

  
  @font-face {
  font-family: "NotoSansKR";
  font-style: normal;
  src: url(${NotoSansKR_Black}) format("woff");
	}

  
  
`;

export default GlobalStyles;
