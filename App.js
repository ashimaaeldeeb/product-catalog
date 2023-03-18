import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products, ProductDetails } from "./screens";

const appScreens = {
  Products: {
    screen: Products,
  },
  ProductDetails: {
    screen: ProductDetails,
  },
};

const Stack = createNativeStackNavigator();

const ScreensStack = (
  <Stack.Navigator
    initialRouteName="AppInitializerScreen"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      presentation: "transparentModal",
    }}
  >
    {Object.keys(appScreens).map((key) => {
      const screen = appScreens[key];
      const { screen: component } = screen;
      return <Stack.Screen key={key} name={key} component={component} />;
    })}
  </Stack.Navigator>
);

export default function App() {
  return <NavigationContainer>{ScreensStack}</NavigationContainer>;
}
