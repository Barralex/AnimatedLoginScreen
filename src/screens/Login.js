import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("window");

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
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          source={require("../assets/bg.jpg")}
          style={styles.backgroundImage}
        />
      </View>

      <View style={{ height: height / 3, justifyContent: "center" }}>
        <View style={styles.signInButton}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>SIGN IN</Text>
        </View>

        <View style={{ ...styles.signInButton, backgroundColor: "#2E71DC" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            SIGN IN WITH FACEBOOK
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
