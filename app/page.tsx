import { Metadata } from 'next/types';
import Link from 'next/link';
import LandingPageStory from './components/LandingPageStory';

export const metadata: Metadata = {
  title: 'Markemigranter | Markemigranter.se',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4">
      <LandingPageStory />
    </main>
  );
}
