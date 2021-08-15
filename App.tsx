// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CircleRepeatSpring from "./pages/basic/CircleRepeatSpring/CircleRepeatSpring";

import AnimationLevels from './pages/index'
import HomeBasic from './pages/basic/index'
import PanGestureOne from "./pages/basic/PanGestureOne";
import HomeIntermediate from "./pages/Intermediate";
import MovableCard from "./pages/Intermediate/movableCard";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="AnimationLevels">
				<Stack.Screen
					name="AnimationLevels"
					component={AnimationLevels}
					options={{
						headerShown: false,
						statusBarHidden: true,
					}}
				/>
				<Stack.Screen
					name="HomeBasic"
					component={HomeBasic}
					options={{
						headerShown: true,
						statusBarHidden: true,
						headerTitle: "",
					}}
				/>
				<Stack.Screen
					name="HomeIntermediate"
					component={HomeIntermediate}
					options={{
						headerShown: true,
						statusBarHidden: true,
						headerTitle: "",
					}}
				/>
				<Stack.Screen
					name="CircleRepeatSpring"
					component={CircleRepeatSpring}
					options={{
						headerShown: true,
						statusBarHidden: true,
						headerTitle: "Circle Spring",
					}}
				/>
				<Stack.Screen
					name="PanGestureOne"
					component={PanGestureOne}
					options={{
						headerShown: true,
						statusBarHidden: true,
						headerTitle: "PanGesture One",
					}}
				/>
				<Stack.Screen
					name="MovableCard"
					component={MovableCard}
					options={{
						headerShown: true,
						statusBarHidden: true,
						headerTitle: "Movable Card",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
