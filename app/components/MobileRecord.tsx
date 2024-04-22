import React from 'react';
import { Person } from '../page';

interface MobileRecordProps {
  data: Person;
}

const titles = [
  'Födelsedatum',
  'Födelseplats',
  'Far',
  'Ålder vid utflytt',
  'Utflyttningsår',
  'Utflyttningsplats',
  'Utflyttat till',
  'Återflyttat',
  'Övrig information',
];

const MobileRecord: React.FC<MobileRecordProps> = ({ data }) => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold pb-3">
        {data.title} {data.first_name} {data.last_name}
      </h2>
      <div className="flex flex-col">
        <div className="flex-1">
          <dl className="flex flex-row pb-1">
            <dt className="pr-1">Födelsedatum:</dt>
            <dd>{data.year_of_birth}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="pr-1">Födelseplats:</dt>
            <dd>{data.birthplace}</dd>
          </dl>
        </div>
        <div className="flex-1">
          <dl className="flex flex-row pb-1">
            <dt className="pr-1">Far:</dt>
            <dd> {data.father !== null ? data.father : '-'}</dd>
          </dl>
          <dl className="flex flex-row pb-1">
            <dt className="pr-1">Faderns titel:</dt>
            <dd>
              {data.title_of_father !== null ? data.title_of_father : '-'}
            </dd>
          </dl>
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col">
          <div className="flex-1">
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Ålder vid utflytt:</dt>
              <dd>
                {data.age_when_emigration === null
                  ? '-'
                  : `${data.age_when_emigration} år`}
              </dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Utflyttningsår:</dt>
              <dd>{data.emigration_date}</dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Utflyttningsplats:</dt>
              <dd>{data.emigration_from}</dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Utflyttat till:</dt>
              <dd>
                {data.emigration_destination === null
                  ? 'Ej angivet'
                  : data.emigration_destination}
              </dd>
            </dl>
          </div>
          <div className="flex-1 pt-4">
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Ålder vid inflytt:</dt>
              <dd>
                {data.age_when_immigration === null
                  ? '-'
                  : `${data.age_when_immigration} år`}
              </dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Inflyttningsår:</dt>
              <dd>
                {data.immigration_date === null ? '-' : data.immigration_date}
              </dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Inflyttningsplats:</dt>
              <dd>
                {data.immigration_destination === null
                  ? '-'
                  : data.immigration_destination}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <dl className="text-md">
        <dt className="pr-1 float-left ">Övrig information:</dt>
        <dd>{data.other === null ? '' : data.other}</dd>
      </dl>
    </section>
  );
};

export default MobileRecord;
