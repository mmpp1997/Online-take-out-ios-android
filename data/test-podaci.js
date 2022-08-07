import Restoran from "../models/restorani";
import Jelo from "../models/jela";
import Prilog from "../models/prilog";
export const Restorani = [
  new Restoran(
    "r1",
    "Ketchup",
    "#e80707",
    "https://www.infovodice.com/media/showtime/storage/2020/07/15/229/main/20200715-114503.jpg?1594810999"
  ),
  new Restoran(
    "r2",
    "LOCAL.ni",
    "#35a120",
    "https://scx1.b-cdn.net/csz/news/800a/2016/howcuttingdo.jpg"
  ),
  new Restoran(
    "r3",
    "Robot",
    "#216cad",
    "https://www.zupcica.com/media/k2/items/src/b713d0f2325cae1c82ff2ce86f6a5920.jpg"
  ),
  new Restoran(
    "r4",
    "Štorija",
    "grey",
    "https://www.croatiaweek.com/wp-content/uploads/2018/02/Basta-Pizza-Zagreb.jpg"
  ),
  new Restoran(
    "r5",
    "Grill Toni",
    "#a02ea6",
    "https://media-cdn.tripadvisor.com/media/photo-s/0c/cf/2c/fc/pizza-bar.jpg"
  ),
];

export const Jela = [
  // Ketchup
  new Jelo("1", "r1", "Ketchup burger", 35, "fastfood"),
  new Jelo("2", "r1", "Piletina americano", 38, "fastfood"),
  new Jelo("12", "r1", "Sendvić piletina", 29, "fastfood"),
  // LOCAL.ni
  new Jelo("3", "r2", "Piletina žar", 40, "fina"),
  new Jelo("4", "r2", "Gulaš sa njokama", 45, "fina"),
  new Jelo("11", "r2", "Teleći rižot", 48, "fina"),
  // Robot
  new Jelo("5", "r3", "Sarme", 35, "fina"),
  new Jelo("6", "r3", "Pečena patka", 38, "fina"),
  new Jelo("14", "r3", "Orzo i slanutak", 18, "fina"),
  new Jelo("15", "r3", "Pečena teletina", 44, "fina"),
  // Štorija
  new Jelo("7", "r4", "Pizza Margarita", 25, "fastfood"),
  new Jelo("8", "r4", "Pizza Miješana", 27, "fastfood"),
  new Jelo("12", "r4", "Pizza Funghi", 27, "fastfood"),
  new Jelo("13", "r4", "Pizza Picante", 51, "fastfood"),
  // Grill Toni
  new Jelo("9", "r5", "Pljeskavica", 25, "fina"),
  new Jelo("10", "r5", "Pljeskavica sa sirom", 30, "fina"),
  new Jelo("16", "r5", "Piletina", 28, "fastfood"),
  new Jelo("17", "r5", "Carsko meso", 35, "fina"),
];

export const Prilozi = [
  new Prilog("1", "Majoneza ", "fastfood", "0"),
  new Prilog("2", "Ketchup ", "fastfood", "0"),
  new Prilog("7", "Feta sir ", "fastfood", "0"),
  new Prilog("8", "Jaje ", "fastfood", "0"),
  new Prilog("9", "Pršut ", "fastfood", "0"),

  new Prilog("3", "Salata ", "fina", "3"),
  new Prilog("4", "Kruh ", "fina", "0"),
  new Prilog("5", "Desert ", "fina", "3"),
  new Prilog("6", "Juha ", "fina", "3"),
];
