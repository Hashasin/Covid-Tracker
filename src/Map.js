import React from 'react';
import "./Map.css";
import {  MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";


function map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MapContainer  center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'noWrap={true}   
        ></TileLayer>
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default map;
