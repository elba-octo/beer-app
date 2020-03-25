import React, { useState, useEffect } from "react";
import "./App.css";
import { BeerCard } from "./BeerCard";
import { Button } from "./Button";

function App() {
  const [beers, setBeers] = useState([]);
  const [pageNb, setPageNb] = useState(1);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${pageNb}`)
      .then(response => response.json())
      .then(setBeers);
  }, [pageNb]);

  function incrementPageNb() {
    setPageNb(pageNb + 1);
  }
  function decrementPageNb() {
    if (pageNb !== 1) setPageNb(pageNb - 1);
  }
  const listBeers = beers.map(beer => <BeerCard key={beer.id} beer={beer} />);
  return (
    <div className="App">
      <ul>{listBeers}</ul>
      <Button value="Previous" onClick={decrementPageNb} />

      <Button value="Next" onClick={incrementPageNb} />
    </div>
  );
}

export default App;
