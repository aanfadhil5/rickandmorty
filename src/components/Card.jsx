import React from "react";

const Card = ({ name, species, gender, image }) => {
  return (
    <div className="hover:shadow-md m-auto p-3 hover:border rounded">
      <div className="flex justify-center rounded-lg">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex justify-between">
        <p>{name}</p>
        <div className="flex text-sm space-x-1">
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
