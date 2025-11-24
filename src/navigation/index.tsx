import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../store/hooks";
import { RootStackParamList } from "./navigationTypes";

import SplashScreen from "../screens/Auth/SplashScreen";
import OnboardingScreen from "../screens/Auth/OnboardingScreen";
import AuthNavigator from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Give time for persisted state to load
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show splash while initializing
  if (isInitializing) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </>
      ) : (
        <Stack.Screen name="Main" component={MainTabNavigator} />
      )}
    </Stack.Navigator>
  );
};
