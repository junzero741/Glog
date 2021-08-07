import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {NotoSansKR_Black,
	NotoSansKR_Bold,
	NotoSansKR_Regular,
	NotoSansKR_Medium,
	NotoSansKR_Light,
	NotoSansKR_Thin,} from '../fonts/font';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
	font-family:'NotoSansKR_Black';
    font-size: 16px;
    color: #2e6399;
	font-weight: 900;
  }
  
  @font-face {
  font-family: "NotoSansKR_Black";
  src: local('NotoSansKR_Black'), url(${NotoSansKR_Black})format("woff");
	}

  @font-face {
  font-family: "NotoSansKR_Bold";
  src: local('NotoSansKR_Bold'), url(${NotoSansKR_Bold})format("woff");
	}

	@font-face {
  font-family: "NotoSansKR_Regular";
  src: local('NotoSansKR_Regular'), url(${NotoSansKR_Regular})format("woff");
	}

	@font-face {
  font-family: "NotoSansKR_Medium";
  src: local('NotoSansKR_Medium'), url(${NotoSansKR_Medium})format("woff");
	}

	@font-face {
  font-family: "NotoSansKR_Light";
  src: local('NotoSansKR_Light'), url(${NotoSansKR_Light})format("woff");
	}

	@font-face {
  font-family: "NotoSansKR_Thin";
  src: local('NotoSansKR_Thin'), url(${NotoSansKR_Thin})format("woff");
	}
  
`;

export default GlobalStyles;
