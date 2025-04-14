import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const Skeleton = () => {
  // Shared values for animation
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(100);
  const scale = useSharedValue(0.8);

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{translateY: translateY.value}, {scale: scale.value}],
    };
  });

  // Animation effect
  useEffect(() => {
    // Start animation when component mounts
    opacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
    translateY.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
    scale.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedBox, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  animatedBox: {
    width: width * 0.8,
    height: 200,
    backgroundColor: '#007AFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});

export default Skeleton;
