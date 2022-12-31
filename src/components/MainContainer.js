import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [userStocks, setUserStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stockData) => setStocks(stockData))
  }, [])

  function handleBuyStock(item) {
    setUserStocks([...userStocks, item])
    const newStocks = stocks.filter((stock) => stock.name !== item.name)
    setStocks(newStocks)
  }

  function handleSellStock (item) {
    setStocks([...stocks, item])
    const newUserStocks = userStocks.filter((stock) => stock.name !== item.name)
    setUserStocks(newUserStocks)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockBuy={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer userStocks={userStocks} onStockSell={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
