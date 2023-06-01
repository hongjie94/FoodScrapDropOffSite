import { useState } from "react";
import MapBox, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pinIcon from "../../assets/imgs/pin.png";

const Map = ({ data }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const [viewState, setViewState] = useState({
    longitude: "-73.9516030004786",
    latitude: "40.72557300071668",
    zoom: 10,
  });

  return (
    <>
      {/* Loader */}
      <div className="loading-layer">
        <div className="app-loading-spinner" />
      </div>

      <MapBox
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}
      >
        {/* Map */}
        {data &&
          data.map(
            (location) =>
              location.latitude &&
              location.longitude && (
                <Marker
                  key={location.object_id}
                  latitude={location.latitude}
                  longitude={location.longitude}
                  zoom={10}
                >
                  <button
                    className="marker-btn"
                    onMouseEnter={(e) => {
                      setHoveredLocation(location);
                    }}
                  >
                    <img className="pin" src={pinIcon} alt="map pin" />
                  </button>
                </Marker>
              )
          )}

        {/* Location details (pop up when map pin hovered)  */}
        {hoveredLocation ? (
          <Popup
            latitude={hoveredLocation.latitude}
            longitude={hoveredLocation.longitude}
            onClose={() => {
              setHoveredLocation(null);
            }}
          >
            <div className="popUp p-2">
              <p>{hoveredLocation.ntaname}</p>
              <p>{hoveredLocation.borough}</p>
              <p>{hoveredLocation.food_scrap_drop_off_site}</p>
              <p>{hoveredLocation.open_months}</p>
              <p>{hoveredLocation.notes}</p>
              <p>{hoveredLocation.hosted_by}</p>
              <p>{hoveredLocation.operation_day_hours}</p>
            </div>
          </Popup>
        ) : null}
      </MapBox>
    </>
  );
};

export default Map;
