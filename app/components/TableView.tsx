'use client';

import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ListOfPersons } from '@/types/types';
import DesktopTableView from './DesktopTableView';
import MobileTableItem from './MobileTableItem';

interface TableViewProps {
  records: ListOfPersons[];
}

export interface Titles {
  name: string;
  year_of_birth: string;
  age_when_emigration: string;
  emigration_date: string;
  emigration_from: string;
  immigration_date: string;
}

const titles: Titles = {
  name: 'Namn',
  year_of_birth: 'Född',
  age_when_emigration: 'Ålder',
  emigration_date: 'Utfl datum',
  emigration_from: 'Utfl plats',
  immigration_date: 'Infl datum',
};

const TableView: React.FC<TableViewProps> = ({ records }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  const handleCardEvent = (id: string) => {
    router.push(`${window.location.origin}/record/${id}`);
  };
  return (
    <>
      {mobileView ? (
        <MobileTableItem records={records} handleCardEvent={handleCardEvent} />
      ) : (
        <DesktopTableView
          records={records}
          titles={titles}
          handleCardEvent={handleCardEvent}
        />
      )}
    </>
  );
};

export default TableView;
