import React from 'react';
import { Person } from '../page';

interface MobileRecordProps {
  data: Person;
}

const titles = [
  'Födelsedatum',
  'Födelseplats',
  'Far',
  'Ålder vid utflytt',
  'Utflyttningsår',
  'Utflyttningsplats',
  'Utflyttat till',
  'Återflyttat',
  'Övrig information',
];

const MobileRecord: React.FC<MobileRecordProps> = ({ data }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold pb-3">
        {data.first_name} {data.last_name}
      </h2>
      <table className="flex flex-row">
        <tr className="text-md flex flex-col w-[13rem] pr-4 sm:pr-4">
          {titles.map((title, index) => (
            <th key={index} className="font-bold pr-1 text-start">
              {title}:
            </th>
          ))}
        </tr>
        <tr className="flex flex-col pl-4 sm:pl-8 pt-[2px] border-l">
          <td>{data.birthplace}</td>
          <td>{data.year_of_birth}</td>
          <td>{data.father}</td>
          <td>
            {data.age_when_emigration === null
              ? 'Endast inflyttad'
              : data.age_when_emigration}{' '}
            år
          </td>
          <td>{data.emigration_date}</td>
          <td>{data.emigration_from}</td>
          <td>
            {data.emigration_destination === null
              ? 'Ej angivet'
              : data.emigration_destination}
          </td>
          <td>
            {data.immigration_date === null ? <br /> : data.immigration_date}
          </td>
          <td>{data.other === null ? '' : data.other}</td>
        </tr>
      </table>
    </section>
  );
};

export default MobileRecord;
