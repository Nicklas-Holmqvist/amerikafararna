import { promises as fs } from 'fs';

interface data {
  ID: number;
  parish: string;
  title: string;
  first_name: string;
  last_name: string;
  year_of_birth: string;
  emigration_from: string;
  emigration_date: string;
  emigration_destination: string;
  birth_place: string;
  father: string;
  immigration_date: string;
  other: string;
  age_of_emigration: string;
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');

  const data = JSON.parse(file);

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Älekullas amerikafarare</h2>
    </main>
  );
}
