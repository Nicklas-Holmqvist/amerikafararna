'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileTableItem from './MobileTableItem';
import { ListOfPersons } from '../page';
import { useRouter } from 'next/navigation';

interface TableViewProps {
  records: ListOfPersons[];
}

const titles = {
  name: 'Namn',
  year_of_birth: 'Född',
  age_when_emigration: 'Ålder',
  emigration_date: 'Utfl datum',
  emigration_from: 'Utfl plats',
  immigration_date: 'Infl datum',
};
const TableView: React.FC<TableViewProps> = ({ records }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <>
      {mobileView ? (
        <MobileTableItem records={records} />
      ) : (
        <table className="mb-8 table-auto">
          <tr className="text-lg h-20">
            <th className="px-2 pb-2 text-center">{titles.name}</th>
            <th className="px-2 pb-2 text-center border-x">
              {titles.year_of_birth}
            </th>
            <th className="px-2 pb-2 text-center border-x rotate-90">
              {titles.age_when_emigration}
            </th>
            <th className="px-2 pb-2 text-center border-x">
              {titles.emigration_date}
            </th>
            <th className="px-2 pb-2 text-center border-x">
              {titles.emigration_from}
            </th>
            <th className="px-2 pb-2 text-center">{titles.immigration_date}</th>
          </tr>
          {records!.map((person, index) => (
            <tr
              className="border-y hover:cursor-pointer hover:bg-green hover:text-basic-white text-sm"
              key={index}
              onClick={() =>
                router.push(`${window.location.origin}/record/${person.id}`)
              }>
              <td className="px-2 pt-2 pb-1 border-r">
                {person.first_name} {person.last_name}
              </td>
              <td className="px-2 pt-2 pb-1 border-r text-center">
                {person.year_of_birth}
              </td>
              <td className="px-2 pt-2 pb-1 border-r text-center">
                {person.age_when_emigration}
              </td>
              <td className="px-2 pt-2 pb-1 border-r text-center">
                {person.emigration_date}
              </td>
              <td className="px-2 pt-2 pb-1 border-r">
                {person.emigration_from}
              </td>
              <td className="px-2 pt-2 pb-1 border-l text-center">
                {person.immigration_date}
              </td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default TableView;
