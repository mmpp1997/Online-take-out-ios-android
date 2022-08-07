export const U_KOSARICU = "U_KOSARICU";
export const UKLONI_IZ = "UKLONI_IZ";
export const UKLONI_SVE = "UKLONI_SVE";
export const NARUCI = "NARUCI";

export const ukosaricu = (id, prilozi) => {
  return {
    type: U_KOSARICU,
    idJela: id,
    dodaci: prilozi,
  };
};
export const ukloniiz = (elementNiza) => {
  return {
    type: UKLONI_IZ,
    element: elementNiza,
  };
};
export const uklonisve = () => {
  return {
    type: UKLONI_SVE,
  };
};
export const naruci = (Ime, Broj, Adresa, Iznos, Restoran) => {
  return {
    type: NARUCI,
    ime: Ime,
    broj: Broj,
    adresa: Adresa,
    iznos: Iznos,
    restoran: Restoran,
  };
};
