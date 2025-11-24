import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./navigationTypes";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "../components/common/atoms/Icon";

import HomeStackNavigator from "./HomeStackNavigator";
import LeagueStackNavigator from "./LeagueStackNavigator";
import TeamStackNavigator from "./TeamStackNavigator";
import PlayerStackNavigator from "./PlayerStackNavigator";
import FavouritesScreen from "../screens/Favourites/FavouritesScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textTertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.fonts.medium,
          fontSize: 12,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof import("@expo/vector-icons").Feather.glyphMap =
            "home";

          switch (route.name) {
            case "HomeTab":
              iconName = "home";
              break;
            case "LeaguesTab":
              iconName = "award";
              break;
            case "TeamsTab":
              iconName = "users";
              break;
            case "PlayersTab":
              iconName = "user";
              break;
            case "FavouritesTab":
              iconName = "heart";
              break;
            case "ProfileTab":
              iconName = "settings";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="LeaguesTab"
        component={LeagueStackNavigator}
        options={{ tabBarLabel: "Leagues" }}
      />
      <Tab.Screen
        name="TeamsTab"
        component={TeamStackNavigator}
        options={{ tabBarLabel: "Teams" }}
      />
      <Tab.Screen
        name="PlayersTab"
        component={PlayerStackNavigator}
        options={{ tabBarLabel: "Players" }}
      />
      <Tab.Screen
        name="FavouritesTab"
        component={FavouritesScreen}
        options={{ tabBarLabel: "Favourites" }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
