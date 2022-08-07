import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

import JelaEkran from "../screens/JelaEkran";
import KosaricaEkran from "../screens/KosaricaEkran";
import PovijestEkran from "../screens/PovijestEkran";
import RestoraniEkran from "../screens/RestoraniEkran";
import UnosEkran from "../screens/UnosEkran";
import PriloziEkran from "../screens/PriloziEkran";
import DetaljiEkran from "../screens/DetaljiEkran";

const RestoraniNavigacija = createStackNavigator({
  Restorani: RestoraniEkran,
  Jela: JelaEkran,
  Prilozi: PriloziEkran,
});
const KosaricaNavigacija = createStackNavigator({
  Kosarica: KosaricaEkran,
  Unos: UnosEkran,
});
const tabEkrani = {
  Restorani: {
    screen: RestoraniNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Kosarica: {
    screen: KosaricaNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-cart-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
};
const RestoraniTabNavigacija =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabEkrani, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: "#fc0320",
        },
      })
    : createBottomTabNavigator(tabEkrani, {
        tabBarOptions: {
          activeBackgroundColor: "green",
          inactiveBackgroundColor: "red",
          activeTintColor: "white",
          inactiveTintColor: "black",
        },
      });

const PovijestNavigator = createStackNavigator({
  Povijest: PovijestEkran,
  Detalji: DetaljiEkran,
});

const AppNavigacija = createDrawerNavigator(
  {
    Restorani: RestoraniTabNavigacija,
    Povijest: PovijestNavigator,
  },
  {
    // POSTAVKE
  }
);

export default createAppContainer(AppNavigacija);
