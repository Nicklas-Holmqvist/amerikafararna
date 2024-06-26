import { supabase } from '@/app/lib/supabaseClient';

// import DummyData from '../data/dummy.json';

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

export async function getAnalyticData() {
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
