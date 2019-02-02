//Colors
export const purple = '#6236FF';
export const purple02 = '#9B8AFF';
export const white = '#fff';
export const black = '#000000';
export const blue = '#3BA9FC';
export const blue02 = '#0084FF';
export const grey01 = '#FAFAFA';
export const grey02 = '#CCD0D2';
export const grey03 = '#828C99';
export const grey04 = '#edeff2';

export const colors = {
  purple,
  purple02,
  white,
  black,
  blue,
  blue02,
  grey01,
  grey02,
  grey03,
  grey04

}


//Space 0 (0px), 1 (4px), 2 (8px), 3 (16px), 4 (32px), 5 (64px), 6 (128px), 7 (256px)
export const space = [ 0, .25, .5, 1, 2, 4, 8, 16 ].map(n => n + 'rem');

//Typescale 0 (14px), 1 (16px), 2 (20px), 3 (24px), 4 (36px), 5 (48px), 6 (80px), 7 (96px)
export const fontSize = [ 0.875, 1, 1.25, 1.5, 2.25, 3, 5, 6   ].map(n => n + 'rem');

//Font Weight
export const fontWeight = {
  bold: 600
}


const theme = {
  colors,
  space,
  fontSize,
  fontWeight
}

export default theme;