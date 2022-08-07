import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { naruci } from "../store/actions/jelaAkcija";

const UnosEkran = (props) => {
  const dispatch = useDispatch();
  const iznos = props.navigation.getParam("cijena");
  const [ime, UnosImena] = useState("");
  const [broj, UnosBroja] = useState("");
  const [adresa, UnosAdrese] = useState("");
  const resNaziv = props.navigation.getParam("res");
  const resBoja = props.navigation.getParam("boja");
  const resNiz = [resNaziv, resBoja];

  return (
    <View>
      <View style={stil.jela}>
        <Text style={stil.naslov}>Ime i prezime naručitelja:</Text>
        <TextInput
          style={stil.textinp}
          onChangeText={(ime) => UnosImena(ime)}
          value={ime}
        />
        <Text style={stil.naslov}>Broj telefona:</Text>
        <TextInput
          style={stil.textinp}
          onChangeText={(broj) => UnosBroja(broj)}
          keyboardType="numeric"
          value={broj}
        />
        <Text style={stil.naslov}>Adresa: </Text>
        <TextInput
          style={stil.textinp}
          onChangeText={(adresa) => UnosAdrese(adresa)}
          value={adresa}
        />
        <Text style={stil.text}>Iznos narudžbe je {iznos} kn</Text>
      </View>
      <View style={stil.recept}>
        <View style={stil.jelazaglavlje}>
          <Button
            color="orange"
            title={"Dovrši narudžbu"}
            onPress={() => {
              if(ime.length==0 || isNaN(broj) || broj.length==0 || adresa.length==0){
                Alert.alert(
                  "",
                  "Molimo unesite sve podatke",
                  [
                    {
                      text: "U redu",
                      
                    },
                  ],
                  { cancelable: false }
                );
              
            }else{
              dispatch(naruci(ime, broj, adresa, iznos, resNiz));

              Alert.alert(
                "",
                "Narudžba je poslana",
                [
                  {
                    text: "U redu",
                    onPress: () => props.navigation.navigate("Kosarica"),
                  },
                ],
                { cancelable: false }
              );
            }
            }}
          
          />
        </View>
      </View>
    </View>
  );
};
UnosEkran.navigationOptions = () => {
  return {
    headerTitle: "Unesite podatke",
    headerStyle: {
      backgroundColor: "#fc0320",
    },
    headerTintColor: "#fff",
  };
};

const stil = StyleSheet.create({
  recept: {
    height: 180,
    width: "90%",
    overflow: "hidden",
    marginVertical: "40%",
    marginHorizontal: "5%",
    justifyContent: "flex-end",
  },
  textinp: {
    height: 40,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  naslov: {
    fontSize: 20,
    color: "black",
    paddingVertical: 3,
    paddingHorizontal: 0,
    textAlign: "left",
  },
  text: {
    fontSize: 25,
    color: "black",
    paddingVertical: 3,
    paddingHorizontal: 0,
    marginTop: "20%",
    textAlign: "center",
  },
  jela: {
    height: 130,
    width: "90%",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: "5%",
  },
  jelazaglavlje: {
    width: "90%",
    borderRadius: 20,
    flexDirection: "column",
    marginVertical: 15,
    marginHorizontal: "5%",
    justifyContent: "space-between",
  },
});
export default UnosEkran;
