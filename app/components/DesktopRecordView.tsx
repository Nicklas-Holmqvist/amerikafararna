import React from 'react';

import { controlRecordData } from '../utils/controlRecordData';
import { Person } from '@/types/types';

interface DesktopRecordViewProps {
  data: Person;
}

const DesktopRecordView: React.FC<DesktopRecordViewProps> = ({ data }) => {
  return (
    <>
      <h2 className="text-2xl pb-4">
        {data.title} {data.first_name} {data.last_name}
      </h2>
      <section className="flex flex-col justify-between w-100 text-md">
        <div className="flex flex-row">
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
              <dd>{controlRecordData(data.father)}</dd>
            </dl>
            <dl className="flex flex-row pb-1">
              <dt className="pr-1">Faderns titel:</dt>
              <dd>{controlRecordData(data.title_of_father)}</dd>
            </dl>
          </div>
        </div>
        <div className="py-4">
          <div className="flex flex-row">
            <div className="flex-1">
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Ålder vid utflytt:</dt>
                <dd>{controlRecordData(data.age_when_emigration)}</dd>
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
                <dd>{controlRecordData(data.emigration_destination)}</dd>
              </dl>
            </div>
            <div className="flex-1">
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Ålder vid inflytt:</dt>
                <dd>{controlRecordData(data.age_when_immigration)}</dd>
              </dl>
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Inflyttningsår:</dt>
                <dd>{controlRecordData(data.immigration_date)}</dd>
              </dl>
              <dl className="flex flex-row pb-1">
                <dt className="pr-1">Inflyttningsplats:</dt>
                <dd>{controlRecordData(data.immigration_destination)}</dd>
              </dl>
            </div>
          </div>
        </div>
        <dl className="py-4 text-md">
          <dt className="pr-1 float-left ">Övrig information:</dt>
          <dd>{controlRecordData(data.other)}</dd>
        </dl>
      </section>
    </>
  );
};

export default DesktopRecordView;