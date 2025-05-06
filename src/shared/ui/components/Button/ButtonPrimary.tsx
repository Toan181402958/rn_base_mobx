import debounce from 'lodash.debounce';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import AppStyle from '../../styles/app.styles';
import {styleView} from '../../styles/styleView';
import {ButtonProps} from './Button.props';
import {styles} from './Button.styles';

export const ButtonPrimary = React.memo(
  ({...props}: ButtonProps & TouchableWithoutFeedbackProps) => {
    const {isDebounce = true, scaleTo = 0.9, delayDebounce = 300} = props;
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{scale: scale.value}],
    }));
    const delay = isDebounce ? delayDebounce : 0;
    const debouncedOnPress = () => {
      props.onPress && props.onPress();
    };

    const handlePress = debounce(debouncedOnPress, delay, {
      leading: true,
      trailing: false,
    });
    const onPressIn = () => {
      scale.value = withSpring(scaleTo, {
        stiffness: 200,
        damping: 15,
      });
    };
    const onPressOut = () => {
      scale.value = withSpring(1, {
        stiffness: 200,
        damping: 15,
      });
    };
    return (
      <TouchableOpacity
        accessible
        accessibilityRole="button"
        disabled={!!props.isLoading || props?.disabled}
        {...props}
        style={[
          styles.container,
          {
            backgroundColor:
              !!props?.isLoading || !!props?.disabled
                ? 'rgba(0, 0, 0, 0.3)'
                : AppStyle.Colors.primary,
          },
          props?.style,
        ]}
        onPress={handlePress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        children={
          <Animated.View style={[animatedStyle, {...styleView.rowItemCenter}]}>
            <Text
              style={[
                styles.txt_title,
                {
                  color:
                    !!props?.isLoading || !!props?.disabled
                      ? 'rgba(255, 255, 255, 0.8)'
                      : AppStyle.Colors.White,
                },
              ]}
              children={props.title}
            />
            {!!props?.iconRight && (
              <Image
                style={[styles.ic_right, props.iconRightStyle]}
                source={props.iconRight}
              />
            )}
            {!!props?.isLoading && (
              <ActivityIndicator
                testID="loading-indicator"
                color={AppStyle.Colors.White}
                style={styles.indicator_loading}
              />
            )}
          </Animated.View>
        }
      />
    );
  },
);
