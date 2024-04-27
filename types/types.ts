export interface Person {
  id: number;
  parish: string;
  title: string;
  first_name: string;
  last_name: string;
  year_of_birth: string;
  emigration_from: string;
  emigration_date: string;
  emigration_destination: string;
  birthplace: string;
  title_of_father: string;
  father: string;
  immigration_from: string;
  immigration_destination: string;
  immigration_date: string;
  other: string;
  link_1: string;
  link_2: string;
  age_when_emigration: string;
  age_when_immigration: string;
}

export interface ListOfPersons {
  id: string;
  first_name: string;
  last_name: string;
  year_of_birth: string;
  age_when_emigration: string;
  age_when_immigration: string;
  emigration_from: string;
  emigration_date: string;
  immigration_date: string;
}

export interface MapPlace {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export interface PersonCoordsData {
  id: number;
  first_name: string;
  last_name: string;
  year_of_birth: string;
  emigration_from: string;
  em_from_lat: number | null;
  em_from_lng: number | null;
  emigration_date: string;
  emigration_destination: string;
  immigration_destination: string;
  im_to_lat: number | null;
  im_to_lng: number | null;
  immigration_date: string;
  age_when_emigration: number | null;
  age_when_immigration: number | null;
}
