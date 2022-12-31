import React from "react";
import Stock from "./Stock";

function PortfolioContainer({userStocks, onStockSell}) {

  const dispStocks = userStocks.map((item) => <Stock key={item.id} item={item} onStockSell={onStockSell}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {dispStocks}
    </div>
  );
}

export default PortfolioContainer;
