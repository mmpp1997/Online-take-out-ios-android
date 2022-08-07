import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Restorani } from "../data/test-podaci";
import { PojedinoJelo } from "../components/jelaRed";
import { useSelector } from "react-redux";

const JelaEkran = (props) => {
  const katID = props.navigation.getParam("idRes");
  const dostupnaJela = useSelector((state) => state.jela.jela);
  const jelaPrikaz = dostupnaJela.filter(
    (jelo) => jelo.idRestorana.indexOf(katID) >= 0
  );
  const odabraniRes = Restorani.find((kat) => kat.id === katID);
  const bojavrh = odabraniRes.boja;

  const prikaziJela = (jela) => {
    return (
      <PojedinoJelo
        naziv={jela.item.naziv}
        boja={bojavrh}
        odabir={() => {
          props.navigation.navigate({
            routeName: "Prilozi",
            params: {
              naziv: jela.item.naziv,
              cijena: jela.item.cijena,
              Id: jela.item.id,
              dodatak: jela.item.prilozi,
              restoran: jela.item.idRestorana,
              pozadina: bojavrh,
            },
          });
        }}
        cijena={jela.item.cijena}
        idRestorana={jela.item.idRestorana}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <FlatList data={jelaPrikaz} renderItem={prikaziJela} />
    </View>
  );
};

JelaEkran.navigationOptions = (navigationData) => {
  const katID = navigationData.navigation.getParam("idRes");
  const odabranaKat = Restorani.find((kat) => kat.id === katID);

  return {
    headerTitle: odabranaKat.naziv,
    headerStyle: {
      backgroundColor: odabranaKat.boja,
    },
    headerTintColor: "white",
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default JelaEkran;
