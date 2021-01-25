import React, { useState, useEffect } from "react";
import "./index.css";
import Card from "./Card";
import Extra from "./Extra";
import SetupItem from "./Setup";
import cardList from "./cardList";
import extrasList from "./extrasList";

function App() {
  const [cards, setCards] = useState([]);
  const [extras, setExtras] = useState([]);
  const [setup, setSetup] = useState([]);
  const [ready, setReady] = useState(false);

  //selects the random cards or extras
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //make the array of cards to use
  const generateCards = () => {
    const cardCount = cardList.length;
    const newCards = [];
    while (newCards.length < 10) {
      let newCard = cardList[getRandomInt(cardCount)];
      if (!newCards.includes(newCard)) {
        newCards.push(newCard);
      }
    }
    const sorted = newCards.sort((a, b) => (a.name > b.name ? 1 : -1));
    setCards(sorted);
  };

  //calculate number of extras to use (Jesse's Algorithm)
  const getExtrasCount = () => {
    let result = 0;
    let looks = 0;
    const chance = 0.8;
    while (looks < 10) {
      let rand = Math.random();
      if (rand > chance) {
        result++;
      } else {
        looks += result + 1;
      }
    }
    return result;
  };

  // make the array of extras to use
  const generateExtras = () => {
    const newExtras = [];
    const extrasCount = extrasList.length;
    const newExtrasCount = getExtrasCount();
    while (newExtras.length < newExtrasCount) {
      let newExtra = extrasList[getRandomInt(extrasCount)];
      if (!newExtras.includes(newExtra)) {
        newExtras.push(newExtra);
      }
    }
    const sorted = newExtras.sort((a, b) => (a.name > b.name ? 1 : -1));
    setExtras(sorted);
  };

  //make array of setup items
  const generateSetup = () => {
    let newSetup = [];
    const chance = 0.33;
    let bigRand = Math.random();
    let shelterRand = Math.random();

    if (bigRand <= chance) {
      newSetup.push("Bigs");
    }
    if (shelterRand <= chance) {
      newSetup.push("Shelters");
    }
    cards.map((card) => {
      if (card.setup !== "" && !newSetup.includes(card.setup)) {
        newSetup.push(card.setup);
        console.log(`${card.setup} from ${card.name}`);
      }
    });
    extras.map((extra) => {
      if (extra.setup !== "" && !newSetup.includes(extra.setup)) {
        newSetup.push(extra.setup);
        console.log(`${extra.setup} from ${extra.name}`);
      }
    });

    setSetup(newSetup);
  };

  useEffect(() => {
    if (ready) {
      generateSetup();
    }
  }, [cards, extras]);

  return (
    <main>
      <div className={`${ready ? "off" : null} title`}>
        <img
          src="./images/dominion logo.jpg"
          alt="Dominion Logo"
          id="dom-logo"
          className={ready ? "off" : null}
        />
        <h2 className="subtitle">Setup Randomizer</h2>
      </div>
      <header>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            generateCards();
            generateExtras();
            setReady(true);
          }}
        >
          Generate Kingdom
        </button>
        <div className="underline"></div>
      </header>
      <section className="container">
        <article className={ready && "setup"}>
          <div className="setup-item-container">
            {setup.map((item, index) => {
              return <SetupItem item={item} key={index} />;
            })}
          </div>
        </article>

        <article className={cards.length > 0 && "cards"}>
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </article>

        <article className={extras.length > 0 && "extras"}>
          {extras.map((extra, index) => {
            return <Extra extra={extra} key={index} />;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
