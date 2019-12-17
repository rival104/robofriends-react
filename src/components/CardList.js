import React from "react";
import Card from "./Card";

const CardList = ({ robots, picSet }) => {
  const cardArray = robots.map((user, i) => {

    //it will only work in production build
    // if(true) {
    //   throw new Error("test error!");
    // }

    return (
      <Card
        key={i}
        picSet={picSet}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
