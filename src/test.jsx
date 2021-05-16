import React, { useRef, useState,useEffect} from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3, Vector4 } from "@babylonjs/core";

// var texture = new BABYLON.Texture(, scene);
//     mat.diffuseTexture = texture;



var columns = 6; // 6 columns
var rows = 1; // 1 row

//alien sprite
var faceUV = new Array(6);

//set all faces to same
for (var i = 0; i < 6; i++) {
  faceUV[i] = new Vector4(i / columns, 0, (i + 1) / columns, 1 / rows);
}

const SpinningBox = (props) => {
  useEffect(() => {
    
  }, [props.URLImage])
  const boxRef = useRef(null);

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={40}
      position={props.position}
      height={1}
      width={0.75}
      depth={0.25}
      faceUV={faceUV}
      wrap
    >
      <standardMaterial>
        <texture url={props.URLImage} assignTo={"diffuseTexture"} />
      </standardMaterial>
    </box>
  );
};

export default function SceneWithSpinningBoxes({URLImage,lng}){
useEffect(() => {
  <SpinningBox/>
}, [URLImage,lng])
 return(
  <div style={{width:"100%",height:"100%"}}>
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
          intensity={1}
          direction={Vector3.Up()}
        />
        <SpinningBox
          name="left"
          position={new Vector3(0, 0, 0)}
          color={Color3.FromHexString("#E0E0E0")}
          URLImage={URLImage}
          lng={lng}
        />
      </Scene>
    </Engine>
  </div>);
}

