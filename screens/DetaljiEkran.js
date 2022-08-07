import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";

const DetaljiEkran = (props) => {
  const podaci = props.navigation.getParam("podaci");
  const jela = podaci.kosarica;
  const renderGrid = (jela) => {
    return (
      <View
        style={{
          ...stil.jela,
          ...{ backgroundColor: podaci.restoran[1], height: 100 },
        }}
      >
        <Text style={stil.text}>{jela.item.naziv}</Text>
        <Text style={stil.text}>Dodaci: {jela.item.dodaci}</Text>
        <Text style={stil.text}>{jela.item.cijena} kn</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View
        style={{ ...stil.jela, ...{ backgroundColor: podaci.restoran[1] } }}
      >
        <Text style={stil.text}>Narucio/la: {podaci.ime}</Text>
        <Text style={stil.text}>Sa broja: {podaci.broj}</Text>
        <Text style={stil.text}>Na adresu: {podaci.adresa}</Text>
        <Text style={stil.text}>Dana {podaci.vrijeme}</Text>
        <Text style={stil.text}>Placeno {podaci.cijena} kn</Text>
      </View>
      <Text style={stil.naslov}>U kosarici su bila jela: </Text>
      <FlatList data={jela} renderItem={renderGrid} />
    </ScrollView>
  );
};
DetaljiEkran.navigationOptions = () => {
  return {
    headerTitle: "Detalji prošle narudžbe",
    headerStyle: {
      backgroundColor: "#fc0320",
    },
    headerTintColor: "#fff",
  };
};

const stil = StyleSheet.create({
  naslov: {
    fontSize: 20,
    color: "black",
    paddingVertical: 0,
    paddingHorizontal: "5%",
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
    marginVertical: 20,
    marginHorizontal: "5%",
    justifyContent: "center",
  },
});
export default DetaljiEkran;
