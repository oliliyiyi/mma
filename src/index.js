import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen/HomeScreen";
import DetailScreen from "./DetailScreen/DetailScreen";
import styles from "./style";
import FavoriteScreen from "./FavoriteScreen/FavoriteScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/HomeIcon.png")}
              resizeMode="stretch"
              style ={{ height: 25, width: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/ListFavo.png")}
              resizeMode="stretch"
              style ={{ height: 23, width: 25 }}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default function RootComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
