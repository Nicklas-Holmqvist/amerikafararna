'use client';

import React from 'react';
import { useRef, useState } from 'react';
import { IoMdPerson } from 'react-icons/io';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MapPlace, PersonCoordsData } from '@/types/types';

interface MapViewInterface {
  data: { destination: MapPlace; persons: PersonCoordsData[] }[];
}

interface SelectMarkerProp {
  destination: MapPlace;
  persons: PersonCoordsData[];
}

const MapView: React.FC<MapViewInterface> = ({ data }) => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const [selectedMarker, setSelectedMarker] = useState<SelectMarkerProp | null>(
    null
  );
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (e: any, place: SelectMarkerProp) => {
    e.stopPropagation();
    const destination = place.destination;
    const persons: PersonCoordsData[] = place.persons;
    console.log(place);

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
            offset={25}
            latitude={selectedMarker.destination.lat}
            longitude={selectedMarker.destination.lng}
            onClose={() => {
              setSelectedMarker(null);
            }}
            closeButton={true}>
            <h3>{selectedMarker.destination.name}</h3>
            <div>
              {selectedMarker.persons.map((person, index: number) => (
                <p key={index}>{person.first_name}</p>
              ))}
              <label>Country: </label>
              <br />
              <label>Website: </label>
            </div>
          </Popup>
        ) : null}
      </Map>
    </main>
  );
};

export default MapView;
