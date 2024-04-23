import { Metadata } from 'next/types';
import { Suspense } from 'react';
import Table from '../components/Table';

export const metadata: Metadata = {
  title: 'Markemigranter',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

export default async function Home() {
  return (
    <main className="w-100 flex-col items-center justify-between py-8">
      <section>
        <Suspense>
          <Table />
        </Suspense>
      </section>
    </main>
  );
}
