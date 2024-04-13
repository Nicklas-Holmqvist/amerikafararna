import { Metadata } from 'next/types';
import Table from './components/Table';
import { supabase } from './lib/supabaseClient';

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
  father: string;
  immigration_date: string;
  other: string;
  age_when_emigration: string;
}

export const metadata: Metadata = {
  title: 'Älekullas Amerikafarare',
  description:
    'Hitta alla som emigrerat eller immigrerat från Amerika mellan 1862 till 1928',
};

async function getData() {
  const { data, error } = await supabase
    .from('travellers')
    .select('*')
    .order('first_name', { ascending: true })
    .order('last_name');

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <section>
        <Table data={data} />
      </section>
    </main>
  );
}
