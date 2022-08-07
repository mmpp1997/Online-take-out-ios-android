import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/Navbutton";
import { useSelector } from "react-redux";

const PovijestEkran = (props) => {
  const povijest = useSelector((state) => state.jela.povijest);
  if (povijest.length === 0) {
    return (
      <Text
        style={{
          ...stil.naslov,
          ...{ fontSize: 18, color: "black", marginVertical: "60%" },
        }}
      >
        Nemate prošlih narudžbi
      </Text>
    );
  }
  const prikaziPovijest = (narudba) => {
    return (
      <View
        style={{
          ...stil.jela,
          ...{ backgroundColor: narudba.item.restoran[1] },
        }}
      >
        <Text style={stil.text}>Narucio/la {narudba.item.ime}</Text>
        <Text style={stil.text}>{narudba.item.vrijeme}</Text>
        <Text style={stil.text}>Placeno {narudba.item.cijena} kn</Text>
        <View style={stil.jelazaglavlje}>
          <Button
            color="orange"
            title="Detalji"
            onPress={() => {
              props.navigation.navigate("Detalji", {
                podaci: narudba.item,
              });
            }}
          />
        </View>
        <Text> </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={povijest} renderItem={prikaziPovijest} />
    </View>
  );
};

PovijestEkran.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Povijest",
    headerStyle: {
      backgroundColor: "#fc0320",
    },
    headerTintColor: "#fff",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};
const stil = StyleSheet.create({
  naslov: {
    fontSize: 20,
    color: "white",
    paddingVertical: 0,
    paddingHorizontal: "20%",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    paddingVertical: 0,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  jela: {
    height: 130,
    width: "90%",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: "5%",
  },
  jelazaglavlje: {
    width: 150,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: "26%",
    justifyContent: "center",
  },
});
export default PovijestEkran;
