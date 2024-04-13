import { supabase } from '@/app/lib/supabaseClient';

interface RecordProps {
  params: { id: string };
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

  return data;
}

export default async function Record({ params: { id } }: RecordProps) {
  const data = await getRecord(id);

  return (
    <main className="flex flex-col items-center justify-between p-24  pt-12">
      <section></section>
    </main>
  );
}
