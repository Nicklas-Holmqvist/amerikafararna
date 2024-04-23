'use client';

import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

import DesktopRecordView from '@/app/components/DesktopRecordView';
import MobileRecord from '@/app/components/MobileRecord';
import pointerIcon from '../../../public/images/pointer-icon.svg';
import { Person } from '@/types/types';

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
        <DesktopRecordView data={data} />
      )}
    </div>
  );
};

export default RecordView;
