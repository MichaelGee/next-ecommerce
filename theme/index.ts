import {
    DefaultTheme
  } from "react-atomize";

 

const mainTheme = {
   ...DefaultTheme,
// COLORS
 colors : {
    ...DefaultTheme.colors,
    brand01 : "#30011E",
    brand02 : "#2B011B",
    brand03 : "#260118",
    brand04 : "#220115",
    brand05 : "#1D0112",
    brand06 : "#18010F",
    brand07 : "#13000C",
    brand08 : "#0E0009",
    brand09 : "#0A0006",
    brand10 : "#050003",
    contrast01 : "#451A35",
    contrast02 : "#59344B",
    contrast03 : "#6E4D62",
    contrast04 : "#6E4D62",
    contrast05 : "#836778",
    contrast06 : "#98808f",
    contrast07 : "#AC99A5",
    contrast08 : "#C1B3BC",
    contrast09 : "#D6CCD2",
    contrast10 : "#EAE6E9",
    black: "#000000",
    white: "#ffffff",
    info: '#3498db',
    success: '#07bc0c',
    warning: "#f1c40f",
    error: '#e74c3c'
 },

 fontFamily : {
    ...DefaultTheme.fontFamily,
    logo: 'Dancing Script, cursive',
 },

//FONT SIZE
 textSize : {
    //  ...DefaultTheme.textSize,
    //  tiny: "0.625rem",
    //  caption: "0.75rem",
    //  body: "0.875rem",
    //  paragraph: "0.875rem",
    //  subheader: "1.063rem",
    //  title: "1.375rem",
    //  heading: "1.625rem",
    //  large: "2rem",
    //  larger: "2.5rem",
    //  largest: "3rem",

     size:{
     ...DefaultTheme.textSize.size,
     },
     height:{
        ...DefaultTheme.textSize.height,
     }
    
 },
// SPACING
// MEDIA QUERIES
// BORDER RADIUS
 rounded:{
   ...DefaultTheme.textSize.rounded,
    1: '2px',
    2: '4px',
    3: '6px',
    4: '8px',
    5: '10px',
    6: '12px',
    7: '14px',
    8: '16px',
    9: '18px',
    10: '20px',
    11: '22px',
    12: '24px',
    13: '26px',
    14: '28px',
    15: '30px',
    16: '32px',
    17: '34px',
    18: '36px',
    19: '38px',
    20: '40px',
    21: '42px',
    22: '44px',
    23: '46px',
    24: '48px',
    25: '50px',
 }
}

export default mainTheme;