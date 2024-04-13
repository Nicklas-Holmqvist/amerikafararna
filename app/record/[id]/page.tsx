interface RecordProps {
  params: { id: string };
}

const Record = async ({ params: { id } }: RecordProps) => {
  return (
    <main className="max-w-[1200px] m-auto flex flex-col justify-between pt-14">
      <p>{id}</p>
      {/* {record === null ? (
        <h1>!!!</h1>
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
