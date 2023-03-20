import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
  const [search, setSearch] = useState("");
  const [prev, setPrev] = useState("");
  return (
    <Context.Provider
      value={{
        search,
        prev,
        setPrev,
        setSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
