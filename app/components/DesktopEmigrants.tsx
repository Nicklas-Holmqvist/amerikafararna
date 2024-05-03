import React from 'react';

import { controlRecordData } from '../utils/controlRecordData';
import { TravellerData } from '@/types/types';

interface DesktopEmigrantsProps {
  title: string;
  emigrants: TravellerData[];
  handleCardEvent: (id: number) => void;
}

const DesktopEmigrants: React.FC<DesktopEmigrantsProps> = ({
  title,
  emigrants,
  handleCardEvent,
}) => {
  return (
    <>
      <h4>{title}</h4>
      <tr className="text-[0.8rem]">
        <th className="text-start pl-1">Namn</th>
        <th className="text-center pl-1">Födelseår</th>
        <th className="text-center pl-1">Ålder</th>
        <th className="text-center pl-1">Utfl datum</th>
        <th className="text-start pl-1">Utfl plats</th>
        <th className="text-cehter pl-1">Återfl datum</th>
      </tr>
      {emigrants.map((person, index) => (
        <tr
          className={`border-y hover:cursor-pointer transition duration-150 hover:bg-green hover:text-basic-white text-sm dropIn opacity-0`}
          style={{ animationDelay: `${index * 0.02}s` }}
          key={index}
          onClick={() => handleCardEvent(person.id)}>
          <td className="text-[0.8rem] py-1 pl-1">
            {person.first_name} {person.last_name}
          </td>
          <td className="text-[0.8rem] border-x pl-1 text-center">
            {person.year_of_birth}
          </td>
          <td className="text-[0.8rem] border-x pl-1 text-center">
            {controlRecordData(person.age_when_emigration)}
          </td>
          <td className="text-[0.8rem] border-x pl-1 text-center">
            {person.emigration_date}
          </td>
          <td className="text-[0.8rem] border-x pl-1">
            {person.emigration_from}
          </td>
          <td className="text-[0.8rem]  pl-1 text-center">
            {controlRecordData(person.immigration_date)}
          </td>
        </tr>
      ))}
    </>
  );
};

export default DesktopEmigrants;
