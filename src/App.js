import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import * as BABYLON from 'babylonjs';
import { Engine, Scene } from 'babylonjs';
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import {
  GridMaterial
} from '@babylonjs/materials';
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
  /* var createScene = function() {
    const canvas = document.getElementById("renderCanvas");
    const engine = new Engine(canvas);
    var scene = new Scene(engine);
    var camera = new FreeCamera("Camera", 13 * Math.PI / 8, Math.PI / 4, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
  
    var pl = new BABYLON.PointLight("pl", BABYLON.Vector3.Zero(), scene);
    pl.diffuse = new BABYLON.Color3(1, 1, 1);
    pl.specular = new BABYLON.Color3(1, 1, 1);
    pl.intensity = 0.8;
    
    var mat = new BABYLON.StandardMaterial("dog", scene);
    mat.diffuseTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png", scene);
    mat.diffuseTexture.hasAlpha = true;
    mat.backFaceCulling = true;
    var box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    box.material = mat;
   
    return scene;
  }; */
  return (
    <div className="App">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <button onClick={getImage()}>Get Image</button>
      <div > 
      <img src={"https://api.mapbox.com/styles/v1/mapbox/light-v10/static/"+lng+","+lat+","+zoom+"/500x300?access_token=pk.eyJ1IjoiYW1yaWtzaW5naDc4NiIsImEiOiJja29wZ2RicXQwa3ZpMnJudXE4OHJmd2NoIn0.NHIyPWX9FfNSCFRUwpvGfw"} alt="Map Image"/>
      </div>
     {/*  <div>
        {createScene}
      </div> */}
      </div>
  );
}

export default App;
