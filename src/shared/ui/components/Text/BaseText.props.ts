import { StyleProp, TextStyle } from "react-native";

export interface BaseTextProps {
    content: string;
    style?: StyleProp<TextStyle>;
    fontSize?: number;
    fontWeight?: '400' | '500' | '600' | '700' | '800';
    lineHeight?: number;
    fontFamily?:
      | 'BeVietnamPro-Regular'
      | 'BeVietnamPro-Medium'
      | 'BeVietnamPro-SemiBold';
    letterSpacing?: number;
    numberOfLines?: number;
    color?: string;
    isLoading?: boolean;
    onPress?: () => void;
}