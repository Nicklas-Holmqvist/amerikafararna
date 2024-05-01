import { supabase } from '@/app/lib/supabaseClient';
import { Metadata } from 'next/types';

import { Person } from '@/types/types';
import RecordView from './RecordView';

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
    .select()
    .eq('id', idToNumber);

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data[0];
}

export default async function Record({ params: { id } }: RecordProps) {
  const data: Person = await getRecord(id);
  return (
    <main className="p-8 pt-10 md:p-24 pt-12 max-w-[1200px] m-auto">
      <RecordView data={data} />
    </main>
  );
}
