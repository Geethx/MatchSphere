import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LeagueStackParamList } from "./navigationTypes";
import LeagueListScreen from "../screens/Leagues/LeagueListScreen";
import LeagueDetailScreen from "../screens/Leagues/LeagueDetailScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";
import MatchDetailScreen from "../screens/Home/MatchDetailScreen";

const Stack = createNativeStackNavigator<LeagueStackParamList>();

const LeagueStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LeagueList" component={LeagueListScreen} />
      <Stack.Screen name="LeagueDetail" component={LeagueDetailScreen} />
      <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
      <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
    </Stack.Navigator>
  );
};

export default LeagueStackNavigator;
