import { Suspense } from 'react';

import { promises as fs } from 'fs';
import { Data, Person } from '@/app/page';

interface RecordProps {
  params: { id: string };
}

// async function getRecord(id: string) {
//   const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');

//   const records: Data = JSON.parse(file);

//   const filteredRecord = records.person.filter((record) => {
//     return record.ID.toString() === id;
//   });
//   if (filteredRecord === null) return null;
//   return filteredRecord[0];
// }

const Record = async ({ params: { id } }: RecordProps) => {
  // const record: Person | null = await getRecord(id);
  return (
    <main className="max-w-[1200px] m-auto flex flex-col justify-between pt-14">
      {id}
      {/* {record === null ? (
        <h1>FEL</h1>
      ) : (
        <Suspense fallback={<div></div>}>
          <p>Titel: {record!.title}</p>
          <p>
            Namn: {record!.first_name} {record!.last_name}
          </p>
          <p>Födelsedatum: {record!.year_of_birth}</p>
          <p>Födelseplats: {record!.birth_place}</p>
          <p>Far: {record!.father}</p>
          <p>Ålder vid utflyttning: {record!.age_of_emigration}</p>
          <p>Utflyttningsdatum: {record!.emigration_date}</p>
          <p>Utflyttat från: {record!.emigration_from}</p>
          <p>Inflyttningsdatum: {record!.immigration_date}</p>
          <p>Utflyttningsdestination: {record!.emigration_destination}</p>
          <p>Övrig information: {record!.other}</p>
        </Suspense>
      )} */}
    </main>
  );
};

export default Record;
