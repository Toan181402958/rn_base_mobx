import { StyleSheet } from "react-native";
import AppStyle from "../../styles/app.styles";
import { styleIcon } from "../../styles/styleView";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyle.Colors.primary,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 12
    },
    txt_title: {
        fontSize: 15,
        fontWeight: '500',
        color: AppStyle.Colors.White,
        lineHeight: 20
    },
    indicator_loading: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    ic_right: {
        ...styleIcon.icon24,
        marginLeft: 8
    }
})