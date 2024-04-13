interface RecordProps {
  params: { id: string };
}

const Record = async ({ params: { id } }: RecordProps) => {
  return (
    <main className="max-w-[1200px] m-auto flex flex-col justify-between pt-14">
      <p>{id}</p>
    </main>
  );
};

export default Record;
