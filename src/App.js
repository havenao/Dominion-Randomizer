import React, { useState } from "react";
import "./index.css";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <main>
      <section className="container">
        <h1>Dominion Selector</h1>
        <button className="btn">Generate Kingdom</button>
        <article className="setup">
          <h3>Setup</h3>
        </article>
        <h2>Cards</h2>
        <article className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
        <article className="extras">
          <h2>extras</h2>
        </article>
      </section>
    </main>
  );
}

export default App;
