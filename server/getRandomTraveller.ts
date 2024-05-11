import { supabase } from '@/app/lib/supabaseClient';
import { cache } from 'react';

export const revalidate = 10;

export const getRandomTraveller = cache(async (count: any) => {
  const randomNumber = Math.floor(Math.random() * count);

  const { data, error } = await supabase
    .from('travellers')
    .select(
      'id, parish, title, first_name, last_name, year_of_birth, birthplace, title_of_father, father, emigration_from, age_when_emigration, emigration_date, emigration_destination, immigration_date, immigration_destination, age_when_immigration,other, link_1, link_2'
    )
    .eq('id', randomNumber);

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data[0];
});
