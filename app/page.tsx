import { Metadata } from 'next/types';

import LandingPageStory from './components/LandingPageStory';
import { supabase } from './lib/supabaseClient';

import DummyData from '../data/dummy.json';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import LandingpageHelp from './components/LandingpageHelp';
import AmountOfPeople from './components/AmountOfPeople';
import MedianAge from './components/MedianAge';
import TotalEmiAndImmi from './components/TotalEmiAndImmi';
import { Person } from '@/types/types';
import RandomTraveller from './components/RandomTraveller';
const DynamicYearBarDiagram = dynamic(
  () => import('./components/YearBarDiagram'),
  { ssr: false, loading: () => <p>Laddar...</p> }
);

export const metadata: Metadata = {
  title: 'Markemigranter | Markemigranter.se',
  description:
    'Hitta alla som emigrerat eller immigrerat från Älekulla socken till Amerika mellan 1862 till 1928',
};

interface AnalyseData {
  parish: string;
  person_id: number;
  year_of_birth: string;
  age_when_emigration: number | null;
  emigration_date: string | null;
  age_when_immigration: number | null;
  immigration_date: string | null;
  gender_type: string;
}

async function getAnalyticData() {
  const { data, error, count } = await supabase
    .from('travellers')
    .select(
      'parish, person_id, year_of_birth, age_when_emigration, emigration_date, immigration_date, age_when_immigration, gender_type',
      { count: 'exact' }
    );

  if (error) {
    throw new Error('Failed to fetch data');
  }

  // const data = DummyData;

  const emigrationTopChart = getEmigrationChartData(data);

  const countOfEmigrants = {
    title: 'Emigranter',
    amount: data.filter((person) => {
      if (person.emigration_date !== null) return person.emigration_date;
    }).length,
  };
  const countOfImmigrants = {
    title: 'Immigranter',
    amount: data.filter((person) => {
      if (person.immigration_date !== null) return person.immigration_date;
    }).length,
  };

  const countOfGenders = [
    {
      title: 'Män',
      amount: data.filter((person) => person.gender_type === 'man').length,
    },
    {
      title: 'Kvinnor',
      amount: data.filter((person) => person.gender_type === 'kvinna').length,
    },
    {
      title: 'Pojkar',
      amount: data.filter((person) => person.gender_type === 'pojke').length,
    },
    {
      title: 'Flickor',
      amount: data.filter((person) => person.gender_type === 'flicka').length,
    },
  ];

  const medianOfAges = [
    { title: 'Män', amount: getMedianAge(data, 'man') },
    { title: 'Kvinnor', amount: getMedianAge(data, 'kvinna') },
  ];

  const oldestByGender = [
    { title: 'Män', amount: getOldestByGender(data, 'man') },
    { title: 'Kvinnor', amount: getOldestByGender(data, 'kvinna') },
  ];

  return {
    count,
    countOfEmigrants,
    countOfImmigrants,
    countOfGenders,
    medianOfAges,
    oldestByGender,
    emigrationTopChart,
  };
}

function getEmigrationChartData(travellers: AnalyseData[]) {
  let travellersPerYear = [];
  let years: string[] = [];

  for (const year of travellers) {
    if (year.emigration_date !== null)
      years.push(year.emigration_date?.slice(0, 4));
    else undefined;
  }
  const filterdYears = removeYearDoubles(years).sort();

  for (const year of filterdYears) {
    let count = 0;
    for (const person of travellers) {
      if (person.emigration_date !== null) {
        const emigrationYear = person.emigration_date!.slice(0, 4);

        if (emigrationYear === year) count += 1;
      }
    }
    travellersPerYear.push({ name: year.toString(), emigranter: count });
  }
  return travellersPerYear;
}

function removeYearDoubles(data: string[]) {
  return data.filter((year, index) => data.indexOf(year) === index);
}

function getOldestByGender(travellers: AnalyseData[], type: string) {
  let getAges = [];
  for (const person of travellers) {
    if (type === 'man') {
      if (person.age_when_emigration !== null && person.gender_type === 'man')
        getAges.push(person.age_when_emigration);
      else getAges.push(0);
    }
    if (type === 'kvinna') {
      if (
        person.age_when_emigration !== null &&
        person.gender_type === 'kvinna'
      )
        getAges.push(person.age_when_emigration);
      else getAges.push(0);
    }
  }
  if (getAges === null) return getAges;
  return Math.max(...getAges);
}

function getMedianAge(travellers: AnalyseData[], type: string) {
  let count = 0;
  let getAges = 0;
  for (const person of travellers) {
    if (type === 'total') {
      if (person.age_when_emigration !== null) {
        getAges += person.age_when_emigration;
        count += 1;
      } else getAges += 0;
    }
    if (type === 'man') {
      if (
        person.age_when_emigration !== null &&
        (person.gender_type === 'man' || person.gender_type === 'pojke')
      ) {
        getAges += person.age_when_emigration;
        count += 1;
      } else getAges += 0;
    }
    if (type === 'kvinna') {
      if (
        person.age_when_emigration !== null &&
        (person.gender_type === 'kvinna' || person.gender_type === 'flicka')
      ) {
        getAges += person.age_when_emigration;
        count += 1;
      } else getAges += 0;
    }
  }
  return Math.round(getAges / count);
}

async function getRandomTraveller(count: any) {
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
}

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
