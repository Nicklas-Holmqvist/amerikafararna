'use client';

import React from 'react';
import { useRef, useState } from 'react';
import Image from 'next/image';

import MapIcon from '../../public/images/map-marker.svg';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MapPlace, TravellerData } from '@/types/types';
import { useRouter } from 'next/navigation';
import DesktopMapPopup from './DesktopMapPopup';
import { useMediaQuery } from 'react-responsive';
import MobileMapPopup from './MobileMapPopup';

interface MapViewInterface {
  data: SelectMarkerProp[];
}

interface SelectMarkerProp {
  destination: MapPlace;
  emigrateFrom: TravellerData[];
  emigrateTo: TravellerData[];
  immigrateTo: TravellerData[];
}

const MapView: React.FC<MapViewInterface> = ({ data }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 980px)',
  });
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const [selectedMarker, setSelectedMarker] = useState<SelectMarkerProp | null>(
    null
  );
  const mapRef = useRef(null);

  const handleCardEvent = (id: number) => {
    router.push(`${window.location.origin}/record/${id}`);
  };

  const zoomToSelectedLoc = (e: any, place: SelectMarkerProp) => {
    e.stopPropagation();
    const destination = place.destination;
    const emigrateFrom: TravellerData[] = place.emigrateFrom;
    const emigrateTo: TravellerData[] = place.emigrateTo;
    const immigrateTo: TravellerData[] = place.immigrateTo;

    setSelectedMarker({
      destination,
      emigrateFrom,
      emigrateTo,
      immigrateTo,
    });
  };
  return (
    <main className="">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ height: 'calc(100vh - 6.1rem)', width: '100%' }}
        initialViewState={{
          latitude: 57.344345,
          longitude: 12.730043,
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}>
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        {data.map((place, index) => {
          return (
            <Marker
              key={index}
              longitude={place.destination.lng}
              latitude={place.destination.lat}>
              <Image
                className="cursor-pointer hover:scale-125 transition"
                src={MapIcon}
                alt="kartikon"
                width={42}
                onClick={(e) => zoomToSelectedLoc(e, place)}
              />
            </Marker>
          );
        })}
        {selectedMarker ? (
          <Popup
            anchor="top"
            latitude={selectedMarker.destination.lat}
            longitude={selectedMarker.destination.lng}
            onClose={() => {
              setSelectedMarker(null);
            }}
            closeButton={true}>
            {mobileView ? (
              <MobileMapPopup
                emigrateFrom={selectedMarker.emigrateFrom}
                emigrateTo={selectedMarker.emigrateTo}
                immigrateTo={selectedMarker.immigrateTo}
                handleCardEvent={handleCardEvent}
                destination={selectedMarker.destination.name}
              />
            ) : (
              <DesktopMapPopup
                emigrateFrom={selectedMarker.emigrateFrom}
                emigrateTo={selectedMarker.emigrateTo}
                immigrateTo={selectedMarker.immigrateTo}
                handleCardEvent={handleCardEvent}
                destination={selectedMarker.destination.name}
              />
            )}
          </Popup>
        ) : null}
      </Map>
    </main>
  );
};

export default MapView;
