import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
