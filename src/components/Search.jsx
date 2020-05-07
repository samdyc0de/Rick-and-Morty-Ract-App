import React, { useState } from "react";
import axios from "axios";
export default ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      //console.log(event.target.value);
      onSubmit(search);
    }
  };

  return (
    <input
      type="text"
      value={search}
      placeholder="Character"
      className="form-control"
      onChange={handleChange}
      onKeyPress={onKeyPress}
    />
  );
};
