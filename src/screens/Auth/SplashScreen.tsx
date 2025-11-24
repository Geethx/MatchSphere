import React, { useEffect } from "react";
import { View, Animated, Dimensions, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import LinearGradient from "react-native-linear-gradient";

const SplashScreen = () => {
  const { theme } = useTheme();
  const scaleAnim = new Animated.Value(0.8);
  const rotateAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Scale up animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Rotate animation (continuous)
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
      }}
    >
      {/* Gradient Background Overlay */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.colors.primary,
        }}
      >
        {/* Top gradient fade */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            backgroundColor: theme.colors.primaryLight,
            opacity: 0.4,
          }}
        />
        {/* Bottom gradient fade */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            backgroundColor: theme.colors.primary,
          }}
        />
      </View>
      {/* Animated Background Circles */}
      <View
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          top: height * 0.1,
          left: width * 0.05,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          bottom: height * 0.15,
          right: width * 0.1,
        }}
      />

      {/* Main Content */}
      <Animated.View
        style={{
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }, { rotate: rotateInterpolate }],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soccer Ball Icon */}
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Text style={{ fontSize: 80, color: "#FFFFFF" }}>⚽</Text>
        </View>

        {/* App Name
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text
            style={{
              fontSize: 48,
              fontWeight: "700",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            MatchSphere
          </Text>
          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(255, 255, 255, 0.8)",
                textAlign: "center",
              }}
            >
              Your Sports Universe
            </Text>
          </View>
        </View> */}
      </Animated.View>

      {/* Loading Indicator */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 40,
          opacity: opacityAnim,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[0, 1, 2].map(i => (
            <Animated.View
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                animation: `pulse ${0.6 + i * 0.1}s infinite`,
              }}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
