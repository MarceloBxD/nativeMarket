import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function Shoes() {
  const [underline, setUnderline] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setUnderline(!underline)}>
        <Text style={styles.shoesTxt}>Air Max 923</Text>
        <Image source={require("../../assets/1.png")} style={styles.shoesImg} />
        <View style={styles.flexCol}>
          <Text style={styles.shoesTxt}>R$ 1259,90</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        {underline && <View style={styles.underline}></View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "45%",
    height: 250,
    marginVertical: "5%",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },

  shoesImg: {
    width: "100%",
    height: "100%",
  },
  shoesTxt: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: -30,
  },
  flexCol: {
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  underline: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.5,
  },
});
