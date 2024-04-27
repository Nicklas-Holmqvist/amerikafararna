'use client';

import React from 'react';
import { useRef, useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MapPlace, PersonCoordsData } from '@/types/types';
import { useRouter } from 'next/navigation';
import DesktopMapPopup from './DesktopMapPopup';
import { useMediaQuery } from 'react-responsive';
import MobileMapPopup from './MobileMapPopup';

interface MapViewInterface {
  data: { destination: MapPlace; persons: PersonCoordsData[] }[];
}

interface SelectMarkerProp {
  destination: MapPlace;
  persons: PersonCoordsData[];
}

const MapView: React.FC<MapViewInterface> = ({ data }) => {
  const router = useRouter();
  const mobileView = useMediaQuery({
    query: '(max-width: 1200px)',
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
    const persons: PersonCoordsData[] = place.persons;

    setSelectedMarker({
      destination,
      persons,
    });

    if (mapRef.current !== null) {
      mapRef.current.flyTo({
        center: [place.destination.lng, place.destination.lat],
        zoom: 10,
      });
    } else {
      flyTo({
        center: [place.destination.lng, place.destination.lat],
        zoom: 10,
      });
    }
  };

  return (
    <main className="w-full h-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ height: '80rem', width: '100vw' }}
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
              <button
                type="button"
                className="cursor-pointer"
                onClick={(e) => zoomToSelectedLoc(e, place)}>
                {<IoMdPerson size={30} color="tomato" />}
              </button>
            </Marker>
          );
        })}
        {selectedMarker ? (
          <Popup
            anchor="center"
            latitude={selectedMarker.destination.lat}
            longitude={selectedMarker.destination.lng}
            onClose={() => {
              setSelectedMarker(null);
            }}
            closeButton={true}>
            {mobileView ? (
              <MobileMapPopup
                persons={selectedMarker.persons}
                handleCardEvent={handleCardEvent}
                destination={selectedMarker.destination.name}
              />
            ) : (
              <DesktopMapPopup
                persons={selectedMarker.persons}
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
