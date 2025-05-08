export enum HospitalesEnum {
  HOSPITAL_GENERAL_TECPAN = "HOSPITAL GENERAL TIPO I DE TECPAN GUATEMALA",
  HOSPITAL_VILLA_NUEVA = "HOSPITAL NACIONAL DE ESPECIALIDADES QUIRÚRGICAS DE VILLA NUEVA",
  HOSPITAL_TOTONICAPAN = "HOSPITAL DEPARTAMENTAL DE TOTONICAPÁN",
  HOSPITAL_QUETZALTENANGO = "HOSPITAL REGIONAL DE OCCIDENTE QUETZALTENANGO"
}

export interface HospitalInfo {
  id: number;
  unidad: number;
  nombre: HospitalesEnum;
  dependencia: string;
  departamento: string;
  estado: boolean;
  nodo: string;
}

export const HOSPITALES_DATA: HospitalInfo[] = [
  {
    id: 4,
    unidad: 287,
    nombre: HospitalesEnum.HOSPITAL_GENERAL_TECPAN,
    dependencia: "Hospitales",
    departamento: "Chimaltenango",
    estado: true,
    nodo: "/assets/nodo1.json"
  },
  {
    id: 3,
    unidad: 285,
    nombre: HospitalesEnum.HOSPITAL_VILLA_NUEVA,
    dependencia: "Hospitales",
    departamento: "Guatemala",
    estado: true,
    nodo: "assets/nodo2.json"
  },
  {
    id: 2,
    unidad: 242,
    nombre: HospitalesEnum.HOSPITAL_TOTONICAPAN,
    dependencia: "Hospitales",
    departamento: "Totonicapan",
    estado: true,
    nodo: "assets/nodo3.json"
  },
  {
    id: 1,
    unidad: 243,
    nombre: HospitalesEnum.HOSPITAL_QUETZALTENANGO,
    dependencia: "Hospitales",
    departamento: "Quetzaltenango",
    estado: true,
    nodo: "assets/nodo4.json"
  }
];
