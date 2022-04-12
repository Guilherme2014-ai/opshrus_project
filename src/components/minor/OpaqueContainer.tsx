import React from "react";

export default function OpaqueContainer(props: any) {
  return (
    <div
      className={"Opaque " + props.class}
      style={{ width: props.width, height: props.height }}
    ></div>
  );
}
