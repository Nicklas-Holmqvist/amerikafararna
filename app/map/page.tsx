import React from 'react';
import { supabase } from '@/app/lib/supabaseClient';

import MapView from '../components/MapView';
import { MapPlace, TravellerData } from '@/types/types';

interface RecordProps {}

async function getMapData() {
  const mapCoords: MapPlace[] = await getMapCoords();
  const personData: TravellerData[] = await getPersonCoords();

  const listOfCoordsAndPersons = [];
  for (const coord of mapCoords) {
    listOfCoordsAndPersons.push({
      destination: coord,
      emigrateFrom: filteredEmigrantFrom(
        coord.lat.toString(),
        coord.lng.toString(),
        personData
      ).sort((a, b) => sortYears(a.emigration_date, b.emigration_date)),
      emigrateTo: filteredEmigrantTo(
        coord.lat.toString(),
        coord.lng.toString(),
        personData
      ).sort((a, b) => sortYears(a.emigration_date, b.emigration_date)),
      immigrateTo: filteredImmigrantTo(
        coord.lat.toString(),
        coord.lng.toString(),
        personData
      ).sort((a, b) => sortYears(a.immigration_date, b.immigration_date)),
    });
  }
  return listOfCoordsAndPersons;
}

function sortYears(a: string | null, b: string | null) {
  if (a === null || b === null) return -1;
  else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
}

function filteredEmigrantFrom(
  lat: string,
  lng: string,
  personData: TravellerData[]
) {
  return personData.filter((person) => {
    if (person.em_from_lat === null && person.em_from_lng === null) return;
    else
      return (
        person.em_from_lat.toString() + person.em_from_lng.toString() ===
        lat + lng
      );
  });
}

function filteredEmigrantTo(
  lat: string,
  lng: string,
  personData: TravellerData[]
) {
  return personData.filter((person) => {
    if (person.em_to_lat === null && person.em_to_lng === null) return;
    else
      return (
        person.em_to_lat.toString() + person.em_to_lng.toString() === lat + lng
      );
  });
}

function filteredImmigrantTo(
  lat: string,
  lng: string,
  personData: TravellerData[]
) {
  return personData.filter((person) => {
    if (person.im_to_lat === null && person.im_to_lng === null) return;
    else
      return (
        person.im_to_lat.toString() + person.im_to_lng.toString() === lat + lng
      );
  });
}

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
      'id, first_name, last_name, year_of_birth, emigration_from, age_when_emigration, emigration_date, em_from_lat, em_from_lng, em_to_lat, em_to_lng, im_to_lat, im_to_lng, immigration_date, age_when_immigration,emigration_destination',
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
