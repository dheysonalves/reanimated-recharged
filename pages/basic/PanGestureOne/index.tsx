import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSpring,
	withRepeat,
	useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SIZE = 100.0;
const CIRCLE_RADIUS = 200.0;

// const handleRotation = (progress: Animated.SharedValue<number>) => {
//   return `${progress.value * 2 * Math.PI}rad`;
// }

type ContextType = {
	translateX: number;
	translateY: number;
};

export default function PanGestureOne() {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	const reanimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: translateX.value },
				{ translateY: translateY.value },
			],
		};
	}, []);

	const panGestureEvent = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateX = translateX.value;
			context.translateY = translateY.value;
		},
		onActive: (event, context) => {
			translateX.value = event.translationX + context.translateX;
			translateY.value = event.translationY + context.translateY;
		},
		onEnd: () => {
			const distance = Math.sqrt(
				translateX.value ** 2 + translateY.value ** 2
			);

			if (distance < CIRCLE_RADIUS + SIZE / 2) {
				translateX.value = withSpring(0);
				translateY.value = withSpring(0);
			}
		},
	});

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.circle}>
				<PanGestureHandler onGestureEvent={panGestureEvent}>
					<Animated.View style={[styles.square, reanimatedStyle]} />
				</PanGestureHandler>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	square: {
		width: SIZE,
		height: SIZE,
		borderRadius: 10,
		backgroundColor: "rgba(0, 0, 256, 0.5)",
	},
	circle: {
		width: CIRCLE_RADIUS * 2,
		height: CIRCLE_RADIUS * 2,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: CIRCLE_RADIUS,
		borderWidth: 5,
		borderColor: "rgba(0, 0, 256, 0.5)",
	},
});
