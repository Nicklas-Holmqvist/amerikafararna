import React from 'react';
import Link from 'next/link';

import { controlRecordData } from '../utils/controlRecordData';
import { Person } from '@/types/types';

interface DesktopRecordViewProps {
  data: Person;
  smallTitle?: boolean;
}

const DesktopRecordView: React.FC<DesktopRecordViewProps> = ({
  data,
  smallTitle,
}) => {
  return (
    <div className={`${smallTitle ? 'w-full' : 'max-w-[1200px]'} m-auto`}>
      <h2 className={`${smallTitle ? 'text-2xl' : 'text-3xl'} pb-4`}>
        {data.title} {data.first_name} {data.last_name}
      </h2>
      <section className="flex flex-col justify-between w-100">
        <div className="flex flex-row">
          <div className="flex-1">
            <dl className="record-dl">
              <dt className="pr-1">Födelsedatum:</dt>
              <dd>{data.year_of_birth}</dd>
            </dl>
            <dl className="record-dl">
              <dt className="pr-1">Födelseplats:</dt>
              <dd>{data.birthplace}</dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl className="record-dl">
              <dt className="pr-1">Far:</dt>
              <dd>{controlRecordData(data.father)}</dd>
            </dl>
            <dl className="record-dl">
              <dt className="pr-1">Faderns titel:</dt>
              <dd>{controlRecordData(data.title_of_father)}</dd>
            </dl>
          </div>
        </div>
        <div className="py-4">
          <div className="flex flex-row">
            <div className="flex-1">
              <dl className="record-dl">
                <dt className="pr-1">Ålder vid utflytt:</dt>
                <dd>{controlRecordData(data.age_when_emigration)}</dd>
              </dl>
              <dl className="record-dl">
                <dt className="pr-1">Utflyttningsår:</dt>
                <dd>{data.emigration_date}</dd>
              </dl>
              <dl className="record-dl">
                <dt className="pr-1">Utflyttningsplats:</dt>
                <dd>{data.emigration_from}</dd>
              </dl>
              <dl className="record-dl">
                <dt className="pr-1">Utflyttat till:</dt>
                <dd>{controlRecordData(data.emigration_destination)}</dd>
              </dl>
            </div>
            <div className="flex-1">
              <dl className="record-dl">
                <dt className="pr-1">Ålder vid inflytt:</dt>
                <dd>{controlRecordData(data.age_when_immigration)}</dd>
              </dl>
              <dl className="record-dl">
                <dt className="pr-1">Inflyttningsår:</dt>
                <dd>{controlRecordData(data.immigration_date)}</dd>
              </dl>
              <dl className="record-dl">
                <dt className="pr-1">Inflyttningsplats:</dt>
                <dd>{controlRecordData(data.immigration_destination)}</dd>
              </dl>
            </div>
          </div>
        </div>
        <dl className="text-[1rem]">
          <dt className="record-float">Övrig information:</dt>
          <dd className="pl-0">{controlRecordData(data.other)}</dd>
        </dl>
        {data.link_1 !== null ? (
          <dl className="py-4 text-[1rem]">
            <dt className="record-float">Extern länk:</dt>
            <dd>
              <Link target="_blank" href={`${data.link_1}`}>
                {data.link_1}
              </Link>
            </dd>
          </dl>
        ) : undefined}
        {data.link_2 !== null ? (
          <dl className="text-[1rem]">
            <dt className="record-float">Extern länk:</dt>
            <dd>
              <Link target="_blank" href={`${data.link_2}`}>
                {data.link_2}
              </Link>
            </dd>
          </dl>
        ) : undefined}
      </section>
    </div>
  );
};

export default DesktopRecordView;
