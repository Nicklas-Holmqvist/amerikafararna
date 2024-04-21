import React from 'react';
import { ListOfPersons } from '../page';
import { useRouter } from 'next/navigation';

interface MobileTableItemProps {
  records: ListOfPersons[];
}

const titles = [
  'Namn',
  'Född',
  'Ålder',
  'Utfl datum',
  'Utfl plats',
  'Infl datum',
];

const MobileTableItem: React.FC<MobileTableItemProps> = ({ records }) => {
  const router = useRouter();
  return (
    <>
      {records!.map((person, index) => (
        <table
          className="border mb-4 table-auto text-sm flex flex-row hover:cursor-pointer hover:bg-green hover:text-basic-white p-4"
          key={index}
          onClick={() =>
            router.push(`${window.location.origin}/record/${person.id}`)
          }>
          <tr className="text-md flex flex-col pr-4">
            {titles.map((title, index) => (
              <th className="text-start px-1" key={index}>
                {title}
              </th>
            ))}
          </tr>
          <tr className="border-l flex flex-col pl-4 pt-[1px]">
            <td className="px-1">
              {person.first_name} {person.last_name}
            </td>
            <td className="px-1">{person.year_of_birth}</td>
            <td className="px-1">{person.age_when_emigration}</td>
            <td className="px-1">{person.emigration_date}</td>
            <td className="px-1">{person.emigration_from}</td>
            <td className="px-1">{person.immigration_date}</td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default MobileTableItem;
