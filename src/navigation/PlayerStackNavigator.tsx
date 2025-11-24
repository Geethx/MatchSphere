import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayerStackParamList } from "./navigationTypes";
import PlayersScreen from "../screens/Players/PlayerSearchScreen";
import PlayerDetailScreen from "../screens/Players/PlayerDetailScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";

const Stack = createNativeStackNavigator<PlayerStackParamList>();

const PlayerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlayerSearch" component={PlayersScreen} />
      <Stack.Screen name="PlayerDetail" component={PlayerDetailScreen} />
      <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
    </Stack.Navigator>
  );
};

export default PlayerStackNavigator;
