import { Jela } from "../../data/test-podaci";
import {
  U_KOSARICU,
  UKLONI_SVE,
  UKLONI_IZ,
  NARUCI,
} from "../actions/jelaAkcija";
import Narudba from "../../models/narudba";
const pocetnoStanje = {
  jela: Jela,
  kosarica: [],
  povijest: [],
};

const jelaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case U_KOSARICU:
      const jelo = state.jela.find((j) => j.id === action.idJela);
      const jelocopy = Object.assign({}, jelo);
      jelocopy.id = Math.floor(Math.random() * 1000);
      const par = action.dodaci;
      const dodatak = par.map((prilog) => prilog.value);
      jelocopy.dodaci = dodatak;
      return { ...state, kosarica: state.kosarica.concat(jelocopy) };
    case UKLONI_SVE:
      return { ...state, kosarica: [] };
    case UKLONI_IZ:
      const novaKosarica = [...state.kosarica];
      novaKosarica.splice(action.element, 1);
      return { ...state, kosarica: novaKosarica };
    case NARUCI:
      var vrijeme = new Date();
      var vrijemeString =
        vrijeme.getDate() +
        ". " +
        (vrijeme.getMonth() + 1) +
        ". " +
        vrijeme.getFullYear() +
        ". u " +
        vrijeme.toTimeString().substr(0, 5);
      var novi = new Narudba(
        action.ime,
        action.broj,
        action.adresa,
        action.iznos,
        vrijemeString,
        action.restoran,
        state.kosarica
      );
      return { ...state, povijest: state.povijest.concat(novi), kosarica: [] };
    default:
      return state;
  }
};
export default jelaReducer;
