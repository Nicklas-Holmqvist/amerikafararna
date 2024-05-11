export interface Person {
  id: number;
  parish: string;
  title: string | null;
  first_name: string;
  last_name: string;
  year_of_birth: string | null;
  emigration_from: string;
  emigration_date: string | null;
  emigration_destination: string | null;
  birthplace: string | null;
  title_of_father: string | null;
  father: string;
  immigration_destination: string | null;
  immigration_date: string | null;
  other: string | null;
  link_1: string | null;
  link_2: string | null;
  age_when_emigration: number | null;
  age_when_immigration: number | null;
}

export interface ListOfPersons {
  id: number;
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

export interface TravallersMapData {
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrantTo: TravellerData[];
}

export interface TravellerData {
  id: number;
  first_name: string;
  last_name: string;
  year_of_birth: string;
  em_from_lat: string;
  em_from_lng: string;
  emigration_date: string;
  emigration_from: string;
  emigration_destination: string;
  em_to_lat: string;
  em_to_lng: string;
  immigration_date: string;
  im_to_lat: string;
  im_to_lng: string;
  age_when_emigration: string;
  age_when_immigration: string;
}
