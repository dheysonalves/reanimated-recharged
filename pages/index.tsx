import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: "#d9d9d9",
	},
	title: {
		fontSize: 36,
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "#363636",
	},
	button: {
		width: 300,
		backgroundColor: "#373333",
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#363636",
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

const AnimationLevels = () => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Animation Level</Text>
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigate("HomeBasic")}>
					<Text style={styles.buttonText}>Basic</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#aada21" }]}
					onPress={() => navigate("HomeIntermediate")}>
					<Text style={styles.buttonText}>Intermediate</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#f12" }]}
					onPress={() => alert("Go to Advanced")}>
					<Text style={styles.buttonText}>Advanced</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AnimationLevels;
