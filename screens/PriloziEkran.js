import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Prilozi } from "../data/test-podaci";
import { useSelector, useDispatch } from "react-redux";
import { ukosaricu } from "../store/actions/jelaAkcija";
import SelectMultiple from "react-native-select-multiple";

const PriloziEkran = (props) => {
  const dispatch = useDispatch();
  const cijenaJela = props.navigation.getParam("cijena");
  const Id = props.navigation.getParam("Id");
  const vrsta = props.navigation.getParam("dodatak");
  const restoran = props.navigation.getParam("restoran");
  const priloziPrikaz = Prilozi.filter(
    (prilog) => prilog.vrstajela.indexOf(vrsta) >= 0
  );
  const imeprilozi = priloziPrikaz.map((prilog) => prilog.naziv);
  const kosarica = useSelector((state) => state.jela.kosarica);
  const [selected, setSelected] = useState([]);
  const nazivJela = props.navigation.getParam("naziv");
  return (
    <ScrollView>
      <Text style={stil.naslov}>Cijena jela je {cijenaJela} kn</Text>
      <Text style={stil.naslov}>
        Odaberite priloge za jelo {nazivJela.toLowerCase()}:
      </Text>
      <View style={stil.recept}>
        <SelectMultiple
          items={imeprilozi}
          selectedItems={selected}
          onSelectionsChange={setSelected}
        />
      </View>
      <View style={stil.botuni}>
        <Button
          color="orange"
          title="Dodaj u kosaricu"
          onPress={() => {
            if (kosarica.length == 0 || kosarica[0].idRestorana == restoran) {
              dispatch(ukosaricu(Id, selected));
              Alert.alert(
                "",
                "Jelo dodano u kosaricu",
                [
                  {
                    text: "U redu",
                    onPress: () => props.navigation.navigate("Jela"),
                  },
                ],
                { cancelable: false }
              );
            } else {
              Alert.alert(
                "",
                "Odaberite jela iz samo jednog restorana ili ocistite kosaricu",
                [
                  {
                    text: "U redu",
                    onPress: () => props.navigation.navigate("Jela"),
                  },
                  {
                    text: "Pregled kosarice",
                    onPress: () => props.navigation.navigate("Kosarica"),
                  },
                ],
                { cancelable: false }
              );
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

PriloziEkran.navigationOptions = (props) => {
  const nazivJela = props.navigation.getParam("naziv");
  const boja = props.navigation.getParam("pozadina");
  return {
    headerTitle: nazivJela,
    headerStyle: {
      backgroundColor: boja,
    },
    headerTintColor: "white",
  };
};
const stil = StyleSheet.create({
  recept: {
    width: "90%",
    borderRadius: 5,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  naslov: {
    fontSize: 20,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: "20%",
    textAlign: "center",
  },
  botuni: {
    width: "90%",
    flexDirection: "column",
    marginVertical: 15,
    marginHorizontal: "5%",
    justifyContent: "center",
    borderWidth: 1,
  },
});
export default PriloziEkran;
