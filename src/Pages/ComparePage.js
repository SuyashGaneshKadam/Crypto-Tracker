import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays";
import { coinObject } from "../Functions/convertObject";
import { settingChartData } from "../Functions/settingChartData";
import { getCoinData } from "../Functions/getCoinData";
import { getCoinPrices } from "../Functions/getCoinPrices";
import Loader from "../Components/Common/Loader";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";
import TogglePriceType from "../Components/Coin/PriceType";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [currentPriceCrypto1, setCurrentPriceCrypto1] = useState();
  const [currentPriceCrypto2, setCurrentPriceCrypto2] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        setCurrentPriceCrypto1(prices1);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        setCurrentPriceCrypto2(prices2);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  }
  
  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    setCurrentPriceCrypto1(prices1);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    setCurrentPriceCrypto2(prices2);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }
  
  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      // const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(event.target.value, days, priceType);
      setCurrentPriceCrypto2(prices2);
      settingChartData(setChartData, currentPriceCrypto1, prices2);
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(event.target.value, days, priceType);
      setCurrentPriceCrypto1(prices1);
      // const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, currentPriceCrypto2);
    }
    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    setCurrentPriceCrypto1(prices1);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    setCurrentPriceCrypto2(prices2);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
