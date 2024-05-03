import { supabase } from '@/app/lib/supabaseClient';
import { Metadata } from 'next/types';
import RecordView from './RecordView';
import { Person } from '@/types/types';

interface RecordProps {
  params: { id: number };
}

export async function generateMetadata({
  params: { id },
}: RecordProps): Promise<Metadata> {
  const { data } = await supabase.from('travellers').select().eq('id', id);

  if (data === null) {
    return {
      title: 'Ingen person hittad | Älekullas Amerikafarare',
    };
  }
  const record: Person = data[0];

  return {
    title: `${record.first_name} ${record.last_name} | Älekullas Amerikafarare`,
    description: `${record.first_name} ${record.last_name} föddes ${
      record.year_of_birth
    } i ${record.birthplace}. ${record.first_name} ${
      record.emigration_date ? 'emigrerade från' : 'immegrerade till'
    } Älekulla mellan 1880 till 1928`,
  };
}

export async function generateStaticParams(): Promise<any> {
  const { data } = await supabase.from('travellers').select('id');

  return data?.map((record) => ({ id: record.id.toString() }));
}

export default async function Record({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await supabase
    .from('travellers')
    .select()
    .match({ id })
    .single();
  return <main className="m-auto">{<RecordView data={data} />}</main>;
}
