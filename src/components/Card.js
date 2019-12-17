import React from "react";

const Card = ({name, id, email}) => {
  //{name, id, email} = props;
  return (
    <div className="bg-light-green-gradient dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
