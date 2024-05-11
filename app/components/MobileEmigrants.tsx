import React from 'react';

import { controlRecordData } from '../utils/controlRecordData';
import { TravellerData } from '@/types/types';

interface MobileEmigrantsProps {
  title: string;
  emigrants: TravellerData[];
  handleCardEvent: (id: number) => void;
}

const MobileEmigrants: React.FC<MobileEmigrantsProps> = ({
  title,
  emigrants,
  handleCardEvent,
}) => {
  const Immigrant = title === 'Immigrerat till';
  return (
    <>
      <h4>{title}</h4>
      {emigrants.map((person, index) => (
        <div
          className={`border-b py-1 pr-2 hover:cursor-pointer transition duration-150 hover:bg-green hover:text-white text-sm dropIn opacity-0`}
          style={{ animationDelay: `${index * 0.02}s` }}
          key={index}
          onClick={() => handleCardEvent(person.id)}>
          <div className="flex flex-row justify-between">
            <dl>
              <dt className="pl-2">Namn</dt>
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
            {Immigrant ? (
              <dl>
                <dt className="pl-2">Infl datum</dt>
                <dd>{controlRecordData(person.immigration_date)}</dd>
              </dl>
            ) : (
              <dl>
                <dt className="pl-2">Utfl datum</dt>
                <dd>{controlRecordData(person.emigration_date)}</dd>
              </dl>
            )}
            <dl>
              <dt className="pl-2">Uftl till</dt>
              <dd>{controlRecordData(person.emigration_destination)}</dd>
            </dl>
          </div>
        </div>
      ))}
    </>
  );
};

export default MobileEmigrants;
