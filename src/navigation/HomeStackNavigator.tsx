import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./navigationTypes";
import HomeScreen from "../screens/Home/HomeScreen";
import MatchDetailScreen from "../screens/Home/MatchDetailScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";
import PlayerDetailScreen from "../screens/Players/PlayerDetailScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
      <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
      <Stack.Screen name="PlayerDetail" component={PlayerDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
