import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import AppNavigacija from "./navigacija/RestoraniNavigacija";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import jelaReducer from "./store/reducers/jelareducer";
LogBox.ignoreAllLogs(true);
enableScreens();

const glavniReducer = combineReducers({
  jela: jelaReducer,
});

const store = createStore(glavniReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigacija />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
