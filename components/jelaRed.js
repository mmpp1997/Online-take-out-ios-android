import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const PojedinoJelo = (props) => {
  return (
    <View style={{ ...stil.jela, ...{ backgroundColor: props.boja } }}>
      <TouchableOpacity onPress={props.odabir}>
        <View>
          <View style={{ ...stil.jelaRedak, ...stil.jelaDetalji }}>
            <Text style={stil.naslov}>{props.naziv}</Text>
            <Text style={stil.naslov}>{props.cijena} kn</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const stil = StyleSheet.create({
  jela: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
  },
  jelaRedak: {
    flexDirection: "row",
  },
  jelaDetalji: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  naslov: {
    fontSize: 15,
    color: "white",
    paddingVertical: "5%",
    textAlign: "left",
  },
});
