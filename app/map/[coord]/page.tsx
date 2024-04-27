import React from 'react';
import { supabase } from '@/app/lib/supabaseClient';

import MapView from '../../components/MapView';
// import classes from './Page.module.css';

// const coordinates = [57.357588,12.752273];

// const { data, error } = await supabase.rpc('get_travellers_by_coordinate', {
//   coord: coordinates
// });

interface RecordProps {
  params: { id: string };
}

async function getMapData(coord: string) {
  const splitCoord = coord.split('%2C');
  const lat = splitCoord[0];
  const lng = splitCoord[1];

  const coordinates = [57.338034, 12.724957];

  const { data, error } = await supabase.rpc('get_travellers_by_coordinate', {
    coord: coordinates,
  });

  const mapCoords = await getMapCoords();
  // const idToNumber = Number(coord);
  // const { data, error } = await supabase
  //   .from('travellers')
  //   .select()
  //   .eq('id', idToNumber);

  // if (error) {
  //   throw new Error('Failed to fetch data');
  // }

  return mapCoords;
}

async function getMapCoords() {
  const { data, error } = await supabase.from('places').select('*');

  if (error) {
    throw new Error('Failed to fetch data');
  }
  return data;
}

export default async function Record({ params: { coord } }: any) {
  // console.log(coord);
  const data: any = await getMapData(coord);
  return (
    <main className="">
      <MapView data={data} />
    </main>
  );
}
