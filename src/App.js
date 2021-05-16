import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import logo from "./logo.svg";
import "./App.css";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW1yaWtzaW5naDc4NiIsImEiOiJja29yMHB2ZDQxMGR0MnZwaWRsZWVrd3lmIn0.clxl95ch73-w4O-McFfL1w";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  const getImage = () =>{
    
  }
  return (
    <div className="App">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <button onClick={getImage()}>Get Image</button>
      <div > 
      <img src={"https://api.mapbox.com/styles/v1/mapbox/light-v10/static/"+lng+","+lat+",14/500x300?access_token=pk.eyJ1IjoiYW1yaWtzaW5naDc4NiIsImEiOiJja29wZ2RicXQwa3ZpMnJudXE4OHJmd2NoIn0.NHIyPWX9FfNSCFRUwpvGfw"} alt="Map Image"/>
      </div>
      </div>
  );
}

export default App;
