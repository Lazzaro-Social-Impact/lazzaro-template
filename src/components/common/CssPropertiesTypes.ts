type TBgColor = 'inherit' | 'initial' | 'transparent' | string;
type TColor = TBgColor;
type TTextAlign = 'inherit' | 'initial' | 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
type TFontSize = number | 'inherit' | 'initial' | string;
type TWeight = number | string | 'bold' | 'light' | 'normal' | 'inherit' | 'initial';

export type {
  TBgColor, TTextAlign, TFontSize, TWeight, TColor
}
