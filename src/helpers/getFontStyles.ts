import { StyleProp, TextStyle } from 'react-native';

export const getFontStyles = ({
  size = 18, weight = '400', color = 'white', lHeight = 22
}: IFontStyles): StyleProp<TextStyle> => ({
  fontSize: size,
  fontWeight: weight,
  color,
  lineHeight: lHeight
});

interface IFontStyles {
  size?: number
  weight?: '400' | '500' | '600' | '700' | '800',
  color?: string
  lHeight?: number
}
