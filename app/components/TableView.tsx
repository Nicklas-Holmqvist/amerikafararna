'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileTableItem from './MobileTableItem';
import { ListOfPersons } from '../page';
import { useRouter } from 'next/navigation';

interface TableViewProps {
  titles: string[];
  records: ListOfPersons[];
}

const TableView: React.FC<TableViewProps> = ({ titles, records }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <>
      {mobileView ? (
        <MobileTableItem titles={titles} records={records} />
      ) : (
        <table className="mb-8 table-auto text-sm">
          <tr className="text-lg">
            {titles.map((title, index) => (
              <th className="text-start px-2 pb-2" key={index}>
                {title}
              </th>
            ))}
          </tr>
          {records!.map((person, index) => (
            <tr
              className="border-y  hover:cursor-pointer hover:bg-green hover:text-basic-white"
              key={index}
              onClick={() =>
                router.push(`${window.location.origin}/record/${person.id}`)
              }>
              <td className="px-2 py-2">{person.first_name}</td>
              <td className="px-2 py-2">{person.last_name}</td>
              <td className="px-2 py-2">{person.year_of_birth}</td>
              <td className="px-2 py-2">{person.emigration_date}</td>
              <td className="px-2 py-2">{person.emigration_from}</td>
              <td className="px-2 py-2">{person.immigration_date}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default TableView;
