import React from 'react';
import { controlRecordData } from '../utils/controlRecordData';
import { TravellerData } from '@/types/types';

interface DesktopMapPopupProps {
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrateTo: TravellerData[];
  destination: string;
  handleCardEvent: (id: number) => void;
}

const DesktopMapPopup: React.FC<DesktopMapPopupProps> = ({
  emigrateFrom,
  emigrateTo,
  immigrateTo,
  handleCardEvent,
  destination,
}) => {
  return (
    <section className="w-[50rem]">
      <h3 className="text-xl pb-2">{destination}</h3>
      <table className="w-full">
        {emigrateFrom.length !== 0 ? (
          <>
            <h4>Emigrerat ifrån</h4>
            <tr className="text-[0.8rem]">
              <th className="text-start pl-1">Namn</th>
              <th className="text-center pl-1">Födelseår</th>
              <th className="pl-1 text-center">Ålder</th>
              <th className="text-center pl-1">Utfl datum</th>
              <th className="text-start pl-1">Utfl plats</th>
              <th className="text-cehter pl-1">Återfl datum</th>
            </tr>
            {emigrateFrom.map((person, index) => (
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
        ) : undefined}
        {emigrateTo.length !== 0 ? (
          <>
            <h4>Emigrerat till</h4>
            <tr className="text-[0.8rem]">
              <th className="text-start pl-1">Namn</th>
              <th className="text-center pl-1">Födelseår</th>
              <th className="pl-1 text-center">Ålder</th>
              <th className="text-center pl-1">Utfl datum</th>
              <th className="text-start pl-1">Utfl plats</th>
              <th className="text-cehter pl-1">Återfl datum</th>
            </tr>
            {emigrateTo.map((person, index) => (
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
        ) : undefined}
        {immigrateTo.length !== 0 ? (
          <>
            <h4>Immigrerade</h4>
            <tr className="text-[0.8rem]">
              <th className="text-start pl-1">Namn</th>
              <th className="text-center pl-1">Födelseår</th>
              <th className="pl-1 text-center">Ålder</th>
              <th className="text-center pl-1">Utfl datum</th>
              <th className="text-start pl-1">Utfl plats</th>
              <th className="text-cehter pl-1">Återfl datum</th>
            </tr>
            {immigrateTo.map((person, index) => (
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
                  {controlRecordData(person.age_when_immigration)}
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
        ) : undefined}
      </table>
    </section>
  );
};

export default DesktopMapPopup;
