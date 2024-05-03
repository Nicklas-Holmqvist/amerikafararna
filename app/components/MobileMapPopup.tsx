import React from 'react';
import { TravellerData } from '@/types/types';

import { controlRecordData } from '../utils/controlRecordData';
import MobileEmigrants from './MobileEmigrants';

interface MobileMapPopupProps {
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrateTo: TravellerData[];
  destination: string;
  handleCardEvent: (id: number) => void;
}

const MobileMapPopup: React.FC<MobileMapPopupProps> = ({
  emigrateFrom,
  emigrateTo,
  immigrateTo,
  handleCardEvent,
  destination,
}) => {
  return (
    <section className="w-[20rem] mobileMapPopup">
      <h3 className="text-xl pb-2 pl-2">{destination}</h3>
      {emigrateFrom.length !== 0 ? (
        <MobileEmigrants
          title={'Emigrerat ifrån'}
          emigrants={emigrateFrom}
          handleCardEvent={handleCardEvent}
        />
      ) : undefined}
      {emigrateTo.length !== 0 ? (
        <MobileEmigrants
          title={'Emigrerat till'}
          emigrants={emigrateTo}
          handleCardEvent={handleCardEvent}
        />
      ) : undefined}
      {immigrateTo.length !== 0 ? (
        <MobileEmigrants
          title={'Immigrerat till'}
          emigrants={immigrateTo}
          handleCardEvent={handleCardEvent}
        />
      ) : undefined}
    </section>
  );
};

export default MobileMapPopup;
