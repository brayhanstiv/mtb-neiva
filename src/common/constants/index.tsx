type Type = {
  id: string;
  name: string;
};

const document_types: Type[] = [
  { id: "01", name: "C.C." },
  { id: "02", name: "C.E." },
  { id: "03", name: "T.I." },
  { id: "04", name: "T.E." },
  { id: "05", name: "Nit." },
  { id: "06", name: "Pasaporte" },
];

const modality_types: Type[] = [
  { id: "01", name: "Travesía" },
  { id: "02", name: "Competencia" },
];

const categories: Type[] = [
  { id: "01", name: "Élite (Hombres entre 18 y 29 años)" },
  { id: "02", name: "Damas (Todas las edades)" },
  { id: "03", name: "Master a (Hombres entre 30 y 39 años)" },
  { id: "04", name: "Master b (Hombres entre 40 y 49 años)" },
  { id: "05", name: "Master c (Hombres de 50 años en adelante)" },
  { id: "06", name: "Mamut (Hombres con peso mayor a 90Kg)" },
];

const rh: Type[] = [
  { id: "01", name: "O+" },
  { id: "02", name: "O-" },
  { id: "03", name: "A+" },
  { id: "04", name: "A-" },
  { id: "05", name: "B+" },
  { id: "06", name: "B-" },
  { id: "07", name: "AB+" },
  { id: "08", name: "AB-" },
];

const sizes: Type[] = [
  { id: "01", name: "S" },
  { id: "02", name: "M" },
  { id: "03", name: "L" },
  { id: "04", name: "XL" },
  { id: "05", name: "XXL" },
];

const sex: Type[] = [
  { id: "01", name: "Masculino" },
  { id: "02", name: "Femenino" },
  { id: "03", name: "Otro" },
];

export { document_types, modality_types, categories, sizes, sex, rh };
