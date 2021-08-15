import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSpring,
	withRepeat,
	useAnimatedScrollHandler,
} from "react-native-reanimated";
import BallPage from "./components/ball";

const WORDS = ["Lets's", 'roll', 'the', 'animation']

export default function AnimatedScrollView() {
	const translateX = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
		translateX.value = event.contentOffset.x;
	})

	return (
		<Animated.ScrollView
		pagingEnabled
		onScroll={scrollHandler}
		scrollEventThrottle={16}
		style={styles.container}
		horizontal>
			{WORDS.map((title, index) => (
				<BallPage
					title={title}
					index={index}
					key={index.toString()}
					translateX={translateX}
					/>
			))}
		</Animated.ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
