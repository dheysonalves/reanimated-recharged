import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface BallPageProps {
	title: string;
	index: number;
	translateX: Animated.SharedValue<number>;
}

const { height, width } = Dimensions.get('window');

const SIZE = width * 0.7;

const BallPage: React.FC<BallPageProps> = ({ index, title, translateX }) => {
	const inputRange = [
		(index - 1) * width,
		index * width,
		(index + 1) * width,
	];

	const reanimatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(
		translateX.value,
		inputRange,
		[0, 1, 0],
		Extrapolate.CLAMP
		);

		const borderRadius = interpolate(
			translateX.value,
			inputRange,
			[0, SIZE / 2, 0],
			Extrapolate.CLAMP
		);


		return {
			transform: [ { scale }],
			borderRadius
		}
	});

	const rTextStyle = useAnimatedStyle(() => {
		const translateY = interpolate(
			translateX.value,
			inputRange,
			[height / 2, 0, -height / 2],
			Extrapolate.CLAMP
		)

		const opacity = interpolate(
			translateX.value,
			inputRange,
			[-2, 1, -2],
			Extrapolate.CLAMP
		)

		return {
			transform: [
				{
					translateY,
				}
			],
			opacity
		}
	});

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: `rgba(13,100,211, 0.${index + 2})` },
			]}>
			<Animated.View style={[styles.square, reanimatedStyle]} />
			<Animated.View style={[styles.wrapper, rTextStyle]}>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width,
		height,
		justifyContent: "center",
		alignItems: "center",
	},
	square: {
		height: SIZE,
		width: SIZE,
		backgroundColor: 'rgba(13,100,211,100)',
	},
	wrapper: {
		position: 'absolute',
	},
	text: {
		fontSize: 70,
		color: '#fff',
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});

export default BallPage;
