import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockBuy}) {

  const dispStocks = stocks.map((item) => <Stock key={item.id} item={item} onStockBuy={onStockBuy}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {dispStocks}
    </div>
  );
}

export default StockContainer;
