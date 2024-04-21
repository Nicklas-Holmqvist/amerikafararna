'use client';

import MobileRecord from '@/app/components/MobileRecord';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

import { Person } from '@/app/page';

interface RecordViewProps {
  data: Person;
}

const RecordView: React.FC<RecordViewProps> = ({ data }) => {
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <div>
      {mobileView ? (
        <MobileRecord data={data} />
      ) : (
        <>
          <h2 className="text-2xl pb-3">
            {data.first_name} {data.last_name}
          </h2>
          <section className="flex flex-row justify-between w-100 text-md">
            <div className="flex-1">
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Födelsedatum:</dt>
                <dd>{data.year_of_birth}</dd>
              </dl>
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Födelseplats:</dt>
                <dd>{data.birthplace}</dd>
              </dl>
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Far:</dt>
                <dd>{data.father}</dd>
              </dl>
            </div>
            <div className="flex-1">
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Ålder vid utflytt:</dt>
                <dd>
                  {data.age_when_emigration === null
                    ? 'Endast inflyttad'
                    : data.age_when_emigration}{' '}
                  år
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
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Återflyttat:</dt>
                <dd>
                  {data.immigration_date === null ? '' : data.immigration_date}
                </dd>
              </dl>
            </div>
          </section>
          <dl className="py-3 text-md">
            <dt className="pr-1 float-left ">Övrig information:</dt>
            <dd>{data.other === null ? '' : data.other}</dd>
          </dl>
        </>
      )}
    </div>
  );
};

export default RecordView;
