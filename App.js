import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CacheImages from "./AssetLoader";
import { AppLoading } from "expo";
import Login from "./src/screens/Login";

const _loadAssetsAsync = async () => {
  const imageAssets = CacheImages([require("./src/assets/bg.jpg")]);
  await Promise.all([...imageAssets]);
};

const App = () => {
  const [isready, setIsready] = useState(false);

  if (!isready) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsready(true)}
        onError={console.warn}
      />
    );
  }

  return <Login />;
};

export default App;
