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
