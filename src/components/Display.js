import React from "react";
import Dog from "./Dog";

const Display = props => {
  console.log("in display", props.dogs);
  const pictureList = props.dogs.map((dogs, index) => {
    return <Dog dogs={dogs} key={index} index={index} />;
  });

  return <div id="dog-list">{pictureList}</div>;
};

export default Display;
