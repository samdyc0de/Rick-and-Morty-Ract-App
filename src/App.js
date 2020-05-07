import React, { Fragment, useState, useEffect } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Search from "./components/Search";
import axios from "axios";
import "emerald-ui/lib/styles.css";
import logo from "./images/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState({ characters: [] });

  useEffect(async () => {
    const Characters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=rick`
      );
      const { results } = response.data;

      setData({ characters: results });
    };
    Characters();
  }, []);

  const handleSubmit = async (search) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${search}`
    );

    const { results } = response.data;
    setData({ characters: results, search: "" });
    console.log(results);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark  boder-white">
        <img src={logo} width="150" className="navbar-brand" />
      </nav>

      <div className="row ">
        <div className="col-md-4 offset-md-4 p-4 ">
          <Search onSubmit={handleSubmit} />
        </div>
      </div>

      <section className="container my-2">
        <div className="row">
          {data.characters.map((character, index) => (
            <Cards character={character} key={index} />
          ))}
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default App;
