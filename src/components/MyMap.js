import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';


function MyMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken = 'pk.eyJ1Ijoia2luc2h1azE0NiIsImEiOiJjbGVhN3M2cjMwMGR1M29vNzZpcmdnazlsIn0.3jsgKWBb_LrTW9pXmpS3Yw';

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
      <>
      <div ref={mapContainer} className="map-container" />
      </>
  );
}
export default MyMap;