import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TeamStackParamList } from "./navigationTypes";
import TeamListScreen from "../screens/Teams/TeamListScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";
import PlayerDetailScreen from "../screens/Players/PlayerDetailScreen";
import MatchDetailScreen from "../screens/Home/MatchDetailScreen";

const Stack = createNativeStackNavigator<TeamStackParamList>();

const TeamStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TeamList" component={TeamListScreen} />
      <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
      <Stack.Screen name="PlayerDetail" component={PlayerDetailScreen} />
      <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
    </Stack.Navigator>
  );
};

export default TeamStackNavigator;
