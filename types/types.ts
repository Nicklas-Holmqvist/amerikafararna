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
