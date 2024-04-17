import { Metadata } from 'next/types';
import Table from './components/Table';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Älekullas Amerikafarare',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

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

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <section>
        <Suspense>
          <Table />
        </Suspense>
      </section>
    </main>
  );
}
