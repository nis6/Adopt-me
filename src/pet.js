import React from "react";

// const Pet = () => {
//     return React.createElement(
//       "div",
//       {},
//       React.createElement("h1", {}, "Luna"),
//       React.createElement("h3", {}, "Dogyy"),
//       React.createElement("h3", {}, "Havanese")
//     );
//   };

const Pet = ({
  name,
  animal,
  breed,
  images,
  city,
  state,
  id
}) => {
  let hero="http://pets-v2.dev-api.com/pets/none.jpg";
  if(images.length){
    hero=images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
          <div className="image-container">
      <img src={hero} alt={`${animal},${name}`} />
    </div>

    <div className="info">
        <h1>{name}</h1>
        <h2>{`${name}-${breed}-${animal}`}</h2>
    </div>
    </a>
  );
};

export default Pet;
