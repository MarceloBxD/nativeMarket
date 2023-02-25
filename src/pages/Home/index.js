import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Shoes from "../../components/Shoes";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>TÊNIS</Text>
        <Text style={[styles.text, { color: "#CECECF" }]}>-</Text>
        <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
        <TouchableOpacity
          style={{ position: "absolute", right: 0, alignSelf: "center" }}
        >
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>

      <ScrollView>
        <Text style={styles.currentPage}>Lançamentos</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes />
          <Shoes />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes />
          <Shoes />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes />
          <Shoes />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes />
          <Shoes />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
  },
  header: {
    marginBottom: 8,
  },
  text: {
    fontSize: 26,
    lineHeight: 25,
    letterSpacing: 0.5,
    marginHorizontal: "1%",
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
    marginHorizontal: "5%",
  },
  currentPage: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: 0.5,
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
});
