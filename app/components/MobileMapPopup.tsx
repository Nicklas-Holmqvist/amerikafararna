import React from 'react';
import { PersonCoordsData } from '@/types/types';
import { controlRecordData } from '../utils/controlRecordData';

interface MobileMapPopupProps {
  persons: PersonCoordsData[];
  destination: string;
  handleCardEvent: (id: number) => void;
}

const MobileMapPopup: React.FC<MobileMapPopupProps> = ({
  persons,
  handleCardEvent,
  destination,
}) => {
  return (
    <section className="w-[25rem]">
      <h3 className="text-xl pb-2 pl-2">{destination}</h3>
      {persons.map((person, index) => (
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
              <dt>Ålder</dt>
              <dd>{controlRecordData(person.age_when_emigration)}</dd>
            </dl>
          </div>
          <div className="flex flex-row justify-between">
            <dl>
              <dt>Födelsedatum</dt>
              <dd>{person.year_of_birth}</dd>
            </dl>
            <dl>
              <dt>Utfl datum</dt>
              <dd>{person.emigration_date}</dd>
            </dl>
            <dl>
              <dt>Uftl plats</dt>
              <dd>{person.emigration_from}</dd>
            </dl>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileMapPopup;
