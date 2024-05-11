import React from 'react';

import { controlRecordData } from '../utils/controlRecordData';
import { ListOfPersons } from '@/types/types';

interface MobileTableItemProps {
  records: ListOfPersons[];
  handleCardEvent: (id: number) => void;
}

const titles = [
  'Namn',
  'Född',
  'Ålder',
  'Utfl datum',
  'Utfl plats',
  'Infl datum',
];

const MobileTableItem: React.FC<MobileTableItemProps> = ({
  records,
  handleCardEvent,
}) => {
  return (
    <section className="pb-4">
      {records!.map((person, index) => (
        <div
          onClick={() => handleCardEvent(person.id)}
          key={index}
          className="border mb-4 table-auto text-sm flex flex-row transition duration-150 hover:cursor-pointer hover:bg-green hover:text-white hover:shadow-md p-4 dropIn opacity-0 bg-schablon bg-repeat bg-small hover:bg-none z-10"
          style={{ animationDelay: `${index * 0.05}s` }}>
          <div className="flex flex-col h-100 justify-between">
            <div className="w-3 h-3 border-2 rounded-full bg-white mt-8"></div>
            <div className="w-3 h-3 border-2 rounded-full bg-white mb-8"></div>
          </div>
          <table className="flex flex-row pl-6">
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
              <td className="px-1">
                {controlRecordData(person.age_when_emigration)}
              </td>
              <td className="px-1">
                {controlRecordData(person.emigration_date)}
              </td>
              <td className="px-1">
                {controlRecordData(person.emigration_from)}
              </td>
              <td className="px-1">
                {controlRecordData(person.immigration_date)}
              </td>
            </tr>
          </table>
          <div className="flex flex-1 justify-end">
            <p className="readMore font-bold">LÄS MER</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileTableItem;
