import React, { Component, useState } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { RunTiming } from "../libs/Animations";

const { height } = Dimensions.get("window");
const {
  Value,
  event,
  block,
  eq,
  cond,
  set,
  Clock,
  interpolate,
  Extrapolate,
} = Animated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  signInButton: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});

const Login = () => {
  const buttonOpacity = new Value(1);
  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, RunTiming(new Clock(), 1, 0))
          ),
        ]),
    },
  ]);

  const buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const bgY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: bgY }] }}
      >
        <Image
          source={require("../assets/bg.jpg")}
          style={styles.backgroundImage}
        />
      </Animated.View>

      <View style={{ height: height / 3, justifyContent: "center" }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={{
              ...styles.signInButton,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>SIGN IN</Text>
          </Animated.View>
        </TapGestureHandler>

        <TapGestureHandler>
          <Animated.View
            style={{
              ...styles.signInButton,
              backgroundColor: "#2E71DC",
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </View>
  );
};

export default Login;
