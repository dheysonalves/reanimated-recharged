// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CircleRepeatSpring from "../pages/CircleRepeatSpring/CircleRepeatSpring";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="CircleRepeatSpring"
					component={CircleRepeatSpring}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
