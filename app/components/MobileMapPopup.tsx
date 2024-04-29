import React from 'react';
import { TravellerData } from '@/types/types';

import { controlRecordData } from '../utils/controlRecordData';

interface MobileMapPopupProps {
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrateTo: TravellerData[];
  destination: string;
  handleCardEvent: (id: number) => void;
}

const MobileMapPopup: React.FC<MobileMapPopupProps> = ({
  emigrateFrom,
  emigrateTo,
  immigrateTo,
  handleCardEvent,
  destination,
}) => {
  return (
    <section className="w-[20rem] mobileMapPopup">
      <h3 className="text-xl pb-2 pl-2">{destination}</h3>
      {emigrateFrom.length !== 0 ? (
        <>
          <h4>Emigrerat ifrån</h4>
          {emigrateFrom.map((person, index) => (
            <div
              className={`border-b py-1 pr-2 hover:cursor-pointer transition duration-150 hover:bg-green hover:text-basic-white text-sm dropIn opacity-0`}
              style={{ animationDelay: `${index * 0.02}s` }}
              key={index}
              onClick={() => handleCardEvent(person.id)}>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Namn</dt>
                  <dd>
                    {person.first_name} {person.last_name}
                  </dd>
                </dl>
                <dl>
                  <dt>Födelsedatum</dt>
                  <dd>{person.year_of_birth}</dd>
                </dl>
              </div>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Utfl datum</dt>
                  <dd>{person.emigration_date}</dd>
                </dl>
                <dl>
                  <dt>Uftl till</dt>
                  <dd>{controlRecordData(person.emigration_destination)}</dd>
                </dl>
              </div>
            </div>
          ))}
        </>
      ) : undefined}
      {emigrateTo.length !== 0 ? (
        <>
          <h4>Emigrerat till</h4>
          {emigrateTo.map((person, index) => (
            <div
              className={`border-b py-1 pr-2 hover:cursor-pointer transition duration-150 hover:bg-green hover:text-basic-white text-sm dropIn opacity-0`}
              style={{ animationDelay: `${index * 0.02}s` }}
              key={index}
              onClick={() => handleCardEvent(person.id)}>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Namn</dt>
                  <dd>
                    {person.first_name} {person.last_name}
                  </dd>
                </dl>
                <dl>
                  <dt>Födelsedatum</dt>
                  <dd>{person.year_of_birth}</dd>
                </dl>
              </div>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Utfl datum</dt>
                  <dd>{person.emigration_date}</dd>
                </dl>
                <dl>
                  <dt>Uftl från</dt>
                  <dd>{person.emigration_from}</dd>
                </dl>
              </div>
            </div>
          ))}
        </>
      ) : undefined}
      {immigrateTo.length !== 0 ? (
        <>
          <h4>Immigrerat till</h4>
          {immigrateTo.map((person, index) => (
            <div
              className={`border-b py-1 pr-2 hover:cursor-pointer transition duration-150 hover:bg-green hover:text-basic-white text-sm dropIn opacity-0`}
              style={{ animationDelay: `${index * 0.02}s` }}
              key={index}
              onClick={() => handleCardEvent(person.id)}>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Namn</dt>
                  <dd>
                    {person.first_name} {person.last_name}
                  </dd>
                </dl>
                <dl>
                  <dt>Födelsedatum</dt>
                  <dd>{person.year_of_birth}</dd>
                </dl>
              </div>
              <div className="flex flex-row justify-between">
                <dl>
                  <dt>Infl datum</dt>
                  <dd>{person.immigration_date}</dd>
                </dl>
                <dl>
                  <dt>Uftl från</dt>
                  <dd>{controlRecordData(person.emigration_from)}</dd>
                </dl>
              </div>
            </div>
          ))}
        </>
      ) : undefined}
    </section>
  );
};

export default MobileMapPopup;
