import 'styled-components';

declare module 'styled-components' {
  type TGrayScaleColors =
    | 'titleActive' | 'font' | 'lightFont'
    | 'placeHolder' | 'line' | 'inputBackground'
    | 'background' | 'offWhite';
  type TColors =
    | 'secondary' | 'lightBlue' | 'darkBlue'
    | 'success' | 'lightGreen' | 'darkGreen'
    | 'error' | 'lightRed' | 'darkRed';
  type TFontWeights = | 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black';
	type TSizes = | 'small' | 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'titleSize' ;

  export interface DefaultTheme {
    grayScaleColors: {
      [color in TGrayScaleColors]: string;
    };
    colors: {
      [color in TColors]: string;
    };
		font_weight : {
			[weight in TFontWeights] : number;
		}
		font_size : {
			[size in TSizes] : string;
		}
		margin : {
			[size in TSizes] : string;
		}
		padding : {
			[size in TSizes] : string;
		}
  }
}