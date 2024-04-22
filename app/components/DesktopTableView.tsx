import React from 'react';

import { ListOfPersons } from '../page';
import { Titles } from './TableView';

interface DesktopTableViewProps {
  records: ListOfPersons[];
  titles: Titles;
  handleCardEvent: (id: string) => void;
}

const DesktopTableView: React.FC<DesktopTableViewProps> = ({
  records,
  titles,
  handleCardEvent,
}) => {
  return (
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
          onClick={() => handleCardEvent(person.id)}>
          <td className="px-2 pt-2 pb-1 border-r">
            {person.first_name} {person.last_name}
          </td>
          <td className="px-2 pt-2 pb-1 border-r text-center">
            {person.year_of_birth}
          </td>
          <td className="px-2 pt-2 pb-1 border-r text-center">
            {person.age_when_emigration !== null
              ? person.age_when_emigration
              : person.age_when_immigration}
          </td>
          <td className="px-2 pt-2 pb-1 border-r text-center">
            {person.emigration_date}
          </td>
          <td className="px-2 pt-2 pb-1 border-r">{person.emigration_from}</td>
          <td className="px-2 pt-2 pb-1 border-l text-center">
            {person.immigration_date}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default DesktopTableView;
