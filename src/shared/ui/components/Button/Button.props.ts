import { JSX, ReactNode } from "react";
import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
    isDebounce?: boolean;
    isLoading?: boolean;
    title?: string;
    disabled?: boolean;
    onPress: () => void;
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    iconRight?: ImageSourcePropType | undefined;
    iconRightStyle?: StyleProp<ImageStyle>;
    delayDebounce?: number;
    scaleTo?: number
}