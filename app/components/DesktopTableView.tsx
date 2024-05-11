import React from 'react';

import { controlRecordData } from '../utils/controlRecordData';
import { ListOfPersons } from '@/types/types';
import { Titles } from './TableView';

interface DesktopTableViewProps {
  records: ListOfPersons[];
  titles: Titles;
  handleCardEvent: (id: number) => void;
}

const DesktopTableView: React.FC<DesktopTableViewProps> = ({
  records,
  titles,
  handleCardEvent,
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        height: `${records.length <= 25 ? 'calc(100vh - 22rem)' : undefined} `,
      }}>
      <table className="table-auto">
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
            className={`border-y hover:cursor-pointer transition duration-150 hover:bg-green hover:text-white text-sm dropIn opacity-0`}
            style={{ animationDelay: `${index * 0.02}s` }}
            key={index}
            onClick={() => handleCardEvent(person.id)}>
            <td className="px-2 pt-2 pb-1 border-r">
              {person.first_name} {person.last_name}
            </td>
            <td className="px-2 pt-2 pb-1 border-r text-center">
              {person.year_of_birth}
            </td>
            <td className="px-2 pt-2 pb-1 border-r text-center">
              {controlRecordData(person.age_when_emigration)}
            </td>
            <td className="px-2 pt-2 pb-1 border-r text-center">
              {person.emigration_date}
            </td>
            <td className="px-2 pt-2 pb-1 border-r">
              {person.emigration_from}
            </td>
            <td className="px-2 pt-2 pb-1 border-l text-center">
              {controlRecordData(person.immigration_date)}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DesktopTableView;
