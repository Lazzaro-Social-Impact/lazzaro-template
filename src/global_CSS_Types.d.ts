import type * as CSS from 'csstype'

declare global {
  type TFlexDirection = CSS.Properties['flexDirection']
  type TJustifyContent = CSS.Properties['justifyContent'];
  type TAlignItems = CSS.Properties['alignItems'];
  type TAlignContent = CSS.Properties['alignContent'];
  type TFlexWrap = CSS.Properties['flexWrap'];
  type TAlignSelf = CSS.Properties['alignSelf'];
  type TGap = CSS.Properties['gap'] | number;
  type TBgColor = CSS.Properties['backgroundColor'];
  type TColor = CSS.Properties['color'];
  type TTextAlign = CSS.Properties['textAlign'];
  type TFontSize = CSS.Properties['fontSize'] | number;
  type TFontWeight = CSS.Properties['fontWeight'];
  type TWeight = CSS.Properties['fontWeight'];
  type TMargin = CSS.Properties['margin'] | number;
  type TMarginTop = CSS.Properties['marginTop'] | number;
  type TMarginBottom = CSS.Properties['marginBottom'] | number;
  type TMarginLeft = CSS.Properties['marginLeft'] | number;
  type TMarginRight = CSS.Properties['marginRight'] | number;
  type TMarginInline = CSS.Properties['marginInline'] | number;
  type TMarginBlock = CSS.Properties['marginBlock'] | number;
  type TPadding = CSS.Properties['padding'] | number;
  type TPaddingTop = CSS.Properties['paddingTop'] | number;
  type TPaddingBottom = CSS.Properties['paddingBottom'] | number;
  type TPaddingLeft = CSS.Properties['paddingLeft'] | number;
  type TPaddingRight = CSS.Properties['paddingRight'] | number;
  type TPaddingInline = CSS.Properties['paddingInline'] | number;
  type TPaddingBlock = CSS.Properties['paddingBlock'] | number;
  type TTextDecoration = CSS.Properties['textDecoration'];
  type TTextTransform = CSS.Properties['textTransform'];
  type TBorderRadius = CSS.Properties['borderRadius'] | number;
  type TMaxWidth = CSS.Properties['maxWidth'] | number;
  type TPosition = CSS.Properties['position'];
  type TTop = CSS.Properties['top'] | number;
  type TRight = CSS.Properties['right'] | number;
  type TBottom = CSS.Properties['bottom'] | number;
  type TLeft = CSS.Properties['left'] | number;
  type TTextShadow = CSS.Properties['textShadow'];
  type TLineHeight = CSS.Properties['lineHeight'] | number;
  type TWidth = CSS.Properties['width'];
  type THeight = CSS.Properties['height'] | number;
  type TMaxHeight = CSS.Properties['maxHeight'];
  type TFlex = CSS.Properties['flex'];
  type TBorder = CSS.Properties['border'];
  type TCursor = CSS.Properties['cursor'];
  type TOnHover = Partial<Record<keyof CSS.Properties, string>>;
}

export { }
