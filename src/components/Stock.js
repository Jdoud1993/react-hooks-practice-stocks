import React from "react";

function Stock({item, onStockBuy, onStockSell}) {

  function handleClickCard () {
    if(onStockBuy) {
      onStockBuy(item)
    } else onStockSell(item)
  }

  return (
    <div>
      <div className="card" onClick={handleClickCard}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
