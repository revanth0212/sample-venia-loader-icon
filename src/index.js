import React from "react";
import { BounceLoader } from "react-spinners";

export default function(props) {
  const { width, children } = props;
  return (
    <div>
      <BounceLoader color="#FF9100" size={width} />
      <span>{children}</span>
    </div>
  );
}
