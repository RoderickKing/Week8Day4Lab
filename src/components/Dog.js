import React from "react";

const Dog = props => {
  console.log("in dog, props:", props);
  const message = props.dogs;

  return (
    <div className="dog">
      <img src={message} />
    </div>
  );
};

export default Dog;
