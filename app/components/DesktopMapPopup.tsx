import React from 'react';

import { TravellerData } from '@/types/types';
import DesktopEmigrants from './DesktopEmigrants';

interface DesktopMapPopupProps {
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrateTo: TravellerData[];
  destination: string;
  handleCardEvent: (id: number) => void;
}

const DesktopMapPopup: React.FC<DesktopMapPopupProps> = ({
  emigrateFrom,
  emigrateTo,
  immigrateTo,
  handleCardEvent,
  destination,
}) => {
  return (
    <section className="w-[52rem]">
      <h3 className="text-xl pb-2">{destination}</h3>
      <table className="w-full">
        {emigrateFrom.length !== 0 ? (
          <DesktopEmigrants
            title={'Emigrerat från'}
            emigrants={emigrateFrom}
            handleCardEvent={handleCardEvent}
          />
        ) : undefined}
        {emigrateTo.length !== 0 ? (
          <DesktopEmigrants
            title={'Emigrerat till'}
            emigrants={emigrateTo}
            handleCardEvent={handleCardEvent}
          />
        ) : undefined}
        {immigrateTo.length !== 0 ? (
          <DesktopEmigrants
            title={'Immigrerat till'}
            emigrants={immigrateTo}
            handleCardEvent={handleCardEvent}
          />
        ) : undefined}
      </table>
    </section>
  );
};

export default DesktopMapPopup;
