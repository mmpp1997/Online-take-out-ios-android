import React from "react";
import { FlatList } from "react-native";
import { Restorani } from "../data/test-podaci";
import { Red } from "../components/red";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/Navbutton";

const RestoraniEkran = (props) => {
  const renderGrid = (podaci) => {
    return (
      <Red
        naziv={podaci.item.naziv}
        boja={podaci.item.boja}
        slika={podaci.item.urlslike}
        odabir={() => {
          props.navigation.navigate("Jela", {
            idRes: podaci.item.id,
          });
        }}
      />
    );
  };
  return <FlatList data={Restorani} renderItem={renderGrid} />;
};
RestoraniEkran.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Restorani",
    headerStyle: {
      backgroundColor: "#fc0320",
    },
    headerTintColor: "#fff",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Menu"
            iconName="ios-cart-outline"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};
export default RestoraniEkran;
