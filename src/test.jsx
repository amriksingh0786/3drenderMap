import React, { useRef, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3, Vector4 } from "@babylonjs/core";

// var texture = new BABYLON.Texture(, scene);
//     mat.diffuseTexture = texture;

const url =
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-121.45146305479662,38.54670827618573,10.159349345124639,0,0/400x400?access_token=pk.eyJ1IjoiY3Jvc3NsaW5lYXBleCIsImEiOiJja253dmMwdTkwNGZ5MzJvM2dveGp3YXoxIn0.aV-tb-H02wkB2gYeVcSOaA";

var columns = 6; // 6 columns
var rows = 1; // 1 row

//alien sprite
var faceUV = new Array(6);

//set all faces to same
for (var i = 0; i < 6; i++) {
  faceUV[i] = new Vector4(i / columns, 0, (i + 1) / columns, 1 / rows);
}

const SpinningBox = (props) => {
  const boxRef = useRef(null);

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      height={1}
      width={0.75}
      depth={0.25}
      faceUV={faceUV}
      wrap
    >
      <standardMaterial>
        <texture url={url} assignTo={"diffuseTexture"} />
      </standardMaterial>
    </box>
  );
};

export const SceneWithSpinningBoxes = () => (
  <div>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={(3 * Math.PI) / 4}
          beta={Math.PI / 4}
          radius={2}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <SpinningBox
          name="left"
          position={new Vector3(0, 0, 0)}
          color={Color3.FromHexString("#EEB5EB")}
        />
      </Scene>
    </Engine>
  </div>
);

export default SceneWithSpinningBoxes;
