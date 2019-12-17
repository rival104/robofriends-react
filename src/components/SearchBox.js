import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({searchChange, randomize}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      <button
        onClick={randomize}
        className="pa3 link dim dib hot-pink bg-black"
      >
        <FontAwesomeIcon icon={faRandom} />
      </button>
    </div>
  );
};

export default SearchBox;
