import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export const Red = (props) => {
  return (
    <View
      style={{
        ...stil.recept,
        ...{ backgroundColor: props.boja, borderColor: props.boja },
      }}
    >
      <TouchableOpacity onPress={props.odabir}>
        <View>
          <View style={{ ...stil.receptRedak, ...stil.receptZaglavlje }}>
            <Image source={{ uri: props.slika }} style={stil.pozSlika} />
          </View>
          <View style={{ ...stil.receptRedak, ...stil.receptDetalji }}>
            <Text numberOfLines={1} style={stil.naslov}>
              {props.naziv.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const stil = StyleSheet.create({
  recept: {
    height: 180,
    width: "90%",
    borderRadius: 5,
    borderWidth: 5,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: "5%",
  },
  receptRedak: {
    flexDirection: "row",
  },
  receptZaglavlje: {
    height: "85%",
  },
  receptDetalji: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
  },
  pozSlika: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  naslov: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 0,
    paddingHorizontal: "30%",
    textAlign: "center",
  },
});
