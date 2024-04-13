import { supabase } from '@/app/lib/supabaseClient';
import { Person } from '@/app/page';
import { Metadata } from 'next/types';

interface RecordProps {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: RecordProps): Promise<Metadata> {
  const record: Person = await getRecord(id);

  if (record.id !== null) {
    return {
      title: `${record.first_name} ${record.last_name} | Älekullas Amerikafarare`,
      description: `${record.first_name} ${record.last_name} föddes ${
        record.year_of_birth
      } i ${record.birthplace}. ${record.first_name} ${
        record.emigration_date ? 'emigrerade från' : 'immegrerade till'
      } Älekulla mellan 1880 till 1928`,
    };
  }
  return {
    title: 'Ingen person hittad | Älekullas Amerikafarare',
  };
}

async function getRecord(id: string) {
  const idToNumber = Number(id);
  const { data, error } = await supabase
    .from('travellers')
    .select('*')
    .eq('id', idToNumber);

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data[0];
}

export default async function Record({ params: { id } }: RecordProps) {
  const data: Person = await getRecord(id);

  return (
    <main className="p-24 pt-12 max-w-[1200px] m-auto">
      <h3 className="text-xl font-bold pb-3">
        {data.first_name} {data.last_name}
      </h3>
      <section className="flex flex-row justify-between w-100">
        <div className="flex-1">
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Födelsedatum:</dt>
            <dd>{data.year_of_birth}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Födelseplats:</dt>
            <dd>{data.birthplace}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Far:</dt>
            <dd>{data.father}</dd>
          </dl>
        </div>
        <div className="flex-1">
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Ålder vid utflytt:</dt>
            <dd>
              {data.age_when_emigration === null
                ? 'Endast inflyttad'
                : data.age_when_emigration}{' '}
              år
            </dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Utflyttningsår:</dt>
            <dd>{data.emigration_date}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Utflyttningsplats:</dt>
            <dd>{data.emigration_from}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Utflyttat till:</dt>
            <dd>
              {data.emigration_destination === null
                ? 'Ej angivet'
                : data.emigration_destination}
            </dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="font-bold pr-1">Återflyttat:</dt>
            <dd>
              {data.immigration_date === null ? '' : data.immigration_date}
            </dd>
          </dl>
        </div>
      </section>
      <dl className="py-3">
        <dt className="font-bold pr-1 float-left">Övrig information:</dt>
        <dd>{data.other === null ? '' : data.other}</dd>
      </dl>
    </main>
  );
}
