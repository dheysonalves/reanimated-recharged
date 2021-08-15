import { Theme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Switch, View } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSpring,
	withRepeat,
	interpolateColor,
	useDerivedValue,
} from "react-native-reanimated";

const COLORS = {
	dark: {
		background: "#1E1E1E",
		circle: "#252525",
		text: "#F8F8F8",
	},
	light: {
		background: "#F8F8F8",
		circle: "#FFF",
		text: "#1E1E1E",
	},
};

const SWITCH_TRACK_COLOR = {
	true: 'rgba(256, 0, 256, 0.2)',
	false: 'rgba(0, 0, 0, 0.1)'
}

export default function ThemeSwiper() {
	const [theme, setTheme] = useState<Theme>('light');
	// const progress = useSharedValue(0);
	const progress = useDerivedValue(() => {
		return theme === 'dark' ? withTiming(1) : withTiming(0);
	}, [theme]);

	const rStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			[COLORS.light.background, COLORS.dark.background]
		)

		return {
			backgroundColor,
		};
	});

	const cStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			[COLORS.light.circle, COLORS.dark.circle]
		)

		return {
			backgroundColor,
		};
	});

	const tStyle = useAnimatedStyle(() => {
		const color = interpolateColor(
			progress.value,
			[0, 1],
			[COLORS.light.text, COLORS.dark.text]
		);

		return {
			color,
		};
	});

	return (
		<Animated.View style={[styles.container, rStyle]}>
			<Animated.Text style={[styles.text, tStyle]}>
				Theme Swiper
			</Animated.Text>
			<Animated.View style={[styles.circle, cStyle]}>
				<Switch
					value={theme === "dark"}
					onValueChange={(toogled) => {
						setTheme(toogled ? "dark" : "light");
					}}
					trackColor={SWITCH_TRACK_COLOR}
					thumbColor={"violet"}
				/>
			</Animated.View>
		</Animated.View>
	);
}

const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	circle: {
		width: SIZE,
		height: SIZE,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: SIZE / 2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 20,
		},
		shadowOpacity: 1.0,
		shadowRadius: 3.84,
		elevation: 20,
	},
	text: {
		fontSize: 40,
		textTransform: 'uppercase',
		marginBottom: 20,
		fontWeight: "bold",
		textAlign: 'center',
		letterSpacing: 3
	}
});
