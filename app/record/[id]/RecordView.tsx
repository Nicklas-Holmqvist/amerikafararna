'use client';

import MobileRecord from '@/app/components/MobileRecord';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

import pointerIcon from '../../../public/images/pointer-icon.svg';
import { Person } from '@/app/page';

interface RecordViewProps {
  data: Person;
}

const RecordView: React.FC<RecordViewProps> = ({ data }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <div>
      <Image
        className="pl-4 pb-4 scale-x-[-1] hover:-translate-x-1 cursor-pointer"
        onClick={() => router.back()}
        height={64}
        width={64}
        src={pointerIcon}
        alt={'Gå tillbaka'}
      />
      {mobileView ? (
        <MobileRecord data={data} />
      ) : (
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
              <div className="flex flex-row">
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
                <div className="flex-1">
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
                      {data.immigration_date === null
                        ? '-'
                        : data.immigration_date}
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
            <dl className="py-4 text-md">
              <dt className="pr-1 float-left ">Övrig information:</dt>
              <dd>{data.other === null ? '' : data.other}</dd>
            </dl>
          </section>
        </>
      )}
    </div>
  );
};

export default RecordView;
