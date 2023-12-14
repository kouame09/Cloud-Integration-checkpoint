import React, { useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css'; 

const MapContainer = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${props.googleApiKey}`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', () => {
      // Une fois que le script est chargé, initialise la carte
      props.google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
          lat: 48.8566, // Latitude de Paris, par exemple
          lng: 2.3522    // Longitude de Paris, par exemple
        }
      });
    });

    document.body.appendChild(script);

    return () => {
      // Nettoyage du script si le composant est démonté
      document.body.removeChild(script);
    };
  }, [props.googleApiKey, props.google.maps]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default GoogleApiWrapper({
  apiKey: 'API_KEY_GOOGLE_MAPS'
})(MapContainer);
