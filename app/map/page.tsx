import React from 'react';
import { supabase } from '@/app/lib/supabaseClient';

import MapView from '../components/MapView';
import { MapPlace, PersonCoordsData } from '@/types/types';
// import classes from './Page.module.css';

interface RecordProps {}

async function getMapData() {
  const mapCoords: MapPlace[] = await getMapCoords();
  const personData: PersonCoordsData[] = await getPersonCoords();

  const listOfCoordsAndPersons = [];
  for (const coord of mapCoords) {
    listOfCoordsAndPersons.push({
      destination: coord,
      persons: filteredEmigrants(coord.name, personData),
    });
  }
  return listOfCoordsAndPersons;
}

function filteredEmigrants(coord: string, personData: PersonCoordsData[]) {
  return personData.filter((person) => person.emigration_destination === coord);
}

// function filteredImmigrants(coord, personData) {
//   return personData.filter(
//     (person) => person.immigration_destination === coord.name
//   );
// }

async function getMapCoords() {
  const { data, error } = await supabase.from('places').select('*');

  if (error) {
    throw new Error('Failed to fetch data');
  }
  return data;
}

async function getPersonCoords() {
  const { data, error } = await supabase
    .from('travellers')
    .select(
      'id, first_name, last_name, year_of_birth, age_when_emigration, emigration_date, emigration_from, emigration_destination, immigration_destination, immigration_date',
      { count: 'exact' }
    );

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export default async function Record({}: RecordProps) {
  const data: any = await getMapData();
  return (
    <main className="">
      <MapView data={data} />
    </main>
  );
}
