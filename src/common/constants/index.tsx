type Type = {
  id: string;
  name: string;
};

const document_types: Type[] = [
  { id: "C.C.", name: "C.C." },
  { id: "C.E.", name: "C.E." },
  { id: "T.I.", name: "T.I." },
  { id: "T.E.", name: "T.E." },
  { id: "nit.", name: "Nit." },
  { id: "pasaporte", name: "Pasaporte" },
];

const modality_types: Type[] = [
  { id: "travesia", name: "Travesía" },
  { id: "competencia", name: "Competencia" },
];

const categories: Type[] = [
  { id: "elite", name: "Élite(Hombres entre 18 y 29 años)" },
  { id: "damas", name: "Damas(Todas las edades)" },
  { id: "masterA", name: "Master a(Hombres entre 30 y 39 años)" },
  { id: "masterB", name: "Master b(Hombres entre 40 y 49 años)" },
  { id: "masterC", name: "Master c(Hombres de 50 años en adelante)" },
  { id: "mamut", name: "Mamut(Hombres con peso mayor a 90Kg)" },
];

const rh: Type[] = [
  { id: "o+", name: "O+" },
  { id: "o-", name: "O-" },
  { id: "a+", name: "A+" },
  { id: "a-", name: "A-" },
  { id: "b+", name: "B+" },
  { id: "b-", name: "B-" },
  { id: "ab+", name: "AB+" },
  { id: "ab-", name: "AB-" },
];

const sizes: Type[] = [
  { id: "s", name: "S" },
  { id: "m", name: "M" },
  { id: "l", name: "L" },
  { id: "xl", name: "XL" },
  { id: "xxl", name: "XXL" },
];

const sex: Type[] = [
  { id: "male", name: "Masculino" },
  { id: "female", name: "Femenino" },
  { id: "otro", name: "Otro" },
];

export { document_types, modality_types, categories, sizes, sex, rh };
