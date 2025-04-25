import React from 'react';

const GoogleMapCustomComponent = ({ lat = 13.0827, lng = 80.2707, width = "400px", maxWidth = 500, height = 300 }) => {
  const markerUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ borderRadius: 30, overflow: 'hidden' }}>
        <iframe
          title="Google Map with Marker"
          src={markerUrl}
          style={{ width: width, maxWidth: maxWidth, height: height, border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapCustomComponent;
