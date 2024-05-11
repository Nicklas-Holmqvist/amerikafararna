import { Metadata } from 'next/types';
import dynamic from 'next/dynamic';

import { getRandomTraveller } from '@/server/getRandomTraveller';
import { getAnalyticData } from '@/server/getAnalyticsData';

import { Person } from '@/types/types';

// import LandingPageStory from './components/LandingPageStory';
import TotalEmiAndImmi from './components/TotalEmiAndImmi';
import LandingpageHelp from './components/LandingpageHelp';
import RandomTraveller from './components/RandomTraveller';
import AmountOfPeople from './components/AmountOfPeople';
import MedianAge from './components/MedianAge';
import Hero from './components/Hero';

const DynamicYearBarDiagram = dynamic(
  () => import('./components/YearBarDiagram'),
  { ssr: false, loading: () => <p>Laddar...</p> }
);

export const metadata: Metadata = {
  title: 'Markemigranter | Markemigranter.se',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

export default async function Home() {
  const data: any = await getAnalyticData();
  const randomTraveller: Person = await getRandomTraveller(data.count);

  return (
    <main className="flex flex-col items-center justify-between bg-schablon bg-repeat bg-small">
      <section className="max-w-[1400px] w-full">
        <Hero />
        <DynamicYearBarDiagram data={data.emigrationTopChart} />
        <LandingpageHelp />
        <TotalEmiAndImmi
          emigrants={data.countOfEmigrants}
          immigrants={data.countOfImmigrants}
        />
        <RandomTraveller data={randomTraveller} />
        <AmountOfPeople data={data.countOfGenders} />
        <MedianAge median={data.medianOfAges} age={data.oldestByGender} />
        {/* <LandingPageStory /> */}
      </section>
    </main>
  );
}
