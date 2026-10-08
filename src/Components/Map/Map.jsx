
import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section className="map" id="delivery">
      <div className="container">
        <div className="map__container">
          <h2 className="map__title">
            DELIVERY <span>COVERAGE AREA</span>
          </h2>

          <p className="map__text">
            We deliver hot & fresh pizza to your location 🍕🔥
          </p>

          <div className="map__frame">
            <iframe
              title="FIERY PIZZA map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.20%2C41.25%2C69.36%2C41.37&layer=mapnik&marker=41.3111%2C69.2797"
              loading="lazy"
              width="100%"
              height="450"
              style={{ border: 0 }}
            />
          </div>

          <a
            className="map__link"
            href="https://www.openstreetmap.org/?mlat=41.3111&mlon=69.2797#map=13/41.3111/69.2797"
            target="_blank"
            rel="noreferrer"
          >
            Open Full Map ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;