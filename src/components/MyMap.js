import React from "react";
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 28.38840499409032,
      lng: 77.34924156754724
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCb18lwQhp7CwG5233PFLnNIIzgXd22yIg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <RoomIcon
          lat={28.38840499409032}
          lng={77.34924156754724}
          fontSize="large"
        />
      </GoogleMapReact>
    </div>
  );
}