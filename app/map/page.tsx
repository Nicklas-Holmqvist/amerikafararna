'use client';

import Link from 'next/link';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import airports from '../../data/airports.json';
import { useRef, useState } from 'react';
import { IoMdPerson } from 'react-icons/io';

// import classes from './Page.module.css';

export default function Home() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (e: any, airport: any, index: any) => {
    // stop event bubble-up which triggers unnecessary events
    e.stopPropagation();
    setSelectedMarker({ airport, index });
    mapRef.current.flyTo({ center: [airport.lng, airport.lat], zoom: 10 });
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
        {airports.map((airport, index) => {
          return (
            <Marker
              key={index}
              longitude={Number(airport.lng)}
              latitude={Number(airport.lat)}>
              <button
                type="button"
                className="cursor-pointer"
                onClick={(e) => zoomToSelectedLoc(e, airport, index)}>
                {<IoMdPerson size={30} color="tomato" />}
              </button>
            </Marker>
          );
        })}
        {selectedMarker ? (
          <Popup
            offset={25}
            latitude={selectedMarker.airport.lat}
            longitude={selectedMarker.airport.lng}
            onClose={() => {
              setSelectedMarker(null);
            }}
            closeButton={true}>
            <h3>{selectedMarker.airport.name}</h3>
            <div>
              <label>Code: </label>
              <span>{selectedMarker.airport.code}</span>
              <br />
              <label>Country: </label>
              <br />
              <label>Website: </label>
            </div>
          </Popup>
        ) : null}
      </Map>
    </main>
  );
}
