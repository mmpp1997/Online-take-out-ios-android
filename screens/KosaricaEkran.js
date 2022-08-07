import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ScrollView,
  Image,
} from "react-native";
import NavButton from "../components/Navbutton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ukloniiz, uklonisve } from "../store/actions/jelaAkcija";
import { useSelector, useDispatch } from "react-redux";
import { Restorani } from "../data/test-podaci";

const KosaricaEkran = (props) => {
  const dispatch = useDispatch();

  const kosarica = useSelector((state) => state.jela.kosarica);
  const iznosNiz = kosarica.map((jelo) => jelo.cijena);
  var iznos = iznosNiz.reduce((a, b) => a + b, 0);
  if (kosarica.length != 0) {
    const kosaricaId = kosarica[0].idRestorana;
    var restoran = Restorani.find((res) => res.id === kosaricaId);
  }

  if (kosarica.length === 0) {
    return (
      <Text
        style={{
          ...stil.naslov,
          ...{ fontSize: 20, color: "black", marginVertical: "50%" },
        }}
      >
        Kosarica je prazna
      </Text>
    );
  }

  const prikaziJela = (jela) => {
    return (
      <View style={{ ...stil.jela, ...{ backgroundColor: restoran.boja } }}>
        <Text style={stil.text}>{jela.item.naziv}</Text>
        <Text style={stil.text}>Dodaci: {jela.item.dodaci}</Text>
        <Text style={stil.text}>{jela.item.cijena} kn</Text>
        <View style={stil.jelazaglavlje}>
          <Button
            color="orange"
            title="Ukloni"
            onPress={() => {
              dispatch(ukloniiz(kosarica.indexOf(jela.item)));
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <Text
        style={{
          ...stil.naslov,
          ...{ fontSize: 30, backgroundColor: restoran.boja },
        }}
      >
        Iznos: {iznos} kn
      </Text>
      <View
        style={{
          ...stil.recept,
          ...{ backgroundColor: restoran.boja, borderColor: restoran.boja },
        }}
      >
        <View style={{ ...stil.receptRedak, ...stil.receptZaglavlje }}>
          <Image source={{ uri: restoran.urlslike }} style={stil.pozSlika} />
        </View>
        <View style={{ ...stil.receptRedak, ...stil.receptDetalji }}>
          <Text numberOfLines={1} style={stil.naslov}>
            {restoran.naziv.toUpperCase()}
          </Text>
        </View>
      </View>
      <View>
        <FlatList data={kosarica} renderItem={prikaziJela} />
        <View style={stil.dnobotuni}>
          <View style={stil.botuni}>
            <Button
              color="orange"
              title="Naruči"
              onPress={() => {
                props.navigation.navigate("Unos", {
                  cijena: iznos,
                  res: restoran.naziv,
                  boja: restoran.boja,
                });
              }}
            />
          </View>
          <View style={stil.botuni}>
            <Button
              color="orange"
              title="Ukloni sve"
              onPress={() => {
                dispatch(uklonisve());
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
KosaricaEkran.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Kosarica",
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
    height: 150,
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
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: "26%",
    justifyContent: "center",
  },
  botuni: {
    width: "40%",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 0,
    justifyContent: "center",
  },
  dnobotuni: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: "10%",
  },
});
export default KosaricaEkran;
