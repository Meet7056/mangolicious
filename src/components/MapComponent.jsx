import React from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

// Default center location (Change this to your location)
const defaultCenter = { lat: 22.5726, lng: 88.3639 };

const GoogleMapComponent = () => {
  return (
    <APIProvider apiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
      <Map zoom={15} center={defaultCenter} style={{ maxWidth: 500, width: "100%" }}>
        {/* Marker with Pin */}
        <AdvancedMarker position={defaultCenter}>
          <Pin background={"#DC752A"} glyphColor={"#ffffff"} borderColor={"#fff"} />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default GoogleMapComponent;
