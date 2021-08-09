import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

const SIZE = 100.0;

// const handleRotation = (progress: Animated.SharedValue<number>) => {
//   return `${progress.value * 2 * Math.PI}rad`;
// }

export default function App() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: `${progress.value * 2 * Math.PI}rad`},
    ]
    }
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[{height: SIZE, width: SIZE, backgroundColor: 'purple'}, reanimatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
