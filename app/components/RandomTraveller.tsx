'use client';

import { useMediaQuery } from 'react-responsive';
import React from 'react';

import DesktopRecordView from './DesktopRecordView';
import SectionHeader from './SectionHeader';
import MobileRecord from './MobileRecord';
import { Person } from '@/types/types';

interface RandomTravellerProps {
  data: Person;
}

const RandomTraveller: React.FC<RandomTravellerProps> = ({ data }) => {
  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <section className="max-w-[1400px] w-full py-20 px-4 md:px-12 bg-white">
      <SectionHeader title={'Dagens utvalda resenär'} />
      <div className="pt-10">
        {mobileView ? (
          <MobileRecord data={data} smallTitle={true} />
        ) : (
          <DesktopRecordView data={data} smallTitle={true} />
        )}
      </div>
    </section>
  );
};

export default RandomTraveller;
