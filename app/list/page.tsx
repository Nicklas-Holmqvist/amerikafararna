import { Metadata } from 'next/types';
import { Suspense } from 'react';
import Table from '../components/Table';

export const metadata: Metadata = {

  title:
    'Lista över emigranter och immigranter från Marks härad | Markemigranter.se',
  description: 'Sök i registret över Markemigranter.',

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
