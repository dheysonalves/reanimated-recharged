import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: "#373333",
	},
	title: {
		fontSize: 36,
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "#fff",
	},
	button: {
		width: 300,
		backgroundColor: "#373333",
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#fff",
		marginBottom: 9,
	},
	buttonText: {
		fontWeight: "bold",
		textTransform: "uppercase",
		textAlign: "center",
		fontSize: 16,
		color: "#fff",
	},
});

const HomeBasic = () => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Basic Level</Text>
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigate("CircleRepeatSpring")}>
					<Text style={styles.buttonText}>Circle Spring</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#d1d1d1" }]}
					onPress={() => navigate("PanGestureOne")}>
					<Text style={styles.buttonText}>PanGesture One</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#0009" }]}
					onPress={() => alert("Go to Advanced")}>
					<Text style={styles.buttonText}>Other...</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}


export default HomeBasic;
