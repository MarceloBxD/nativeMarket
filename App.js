import React from "react";
import "react-native-gesture-handler";

// import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { StyleSheet } from "react-native";

// import { Anton_400Regular, useFonts } from "@expo-google-fonts/anton";

import Routes from "./src/router";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Anton_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
