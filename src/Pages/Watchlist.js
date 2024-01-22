import React, { useEffect, useState } from "react";
// import Footer from "../components/Common/Footer/footer";
import coins from "../Data/Coins";
import TabsComponent from "../Components/Dashboard/Tabs";
import Header from "../Components/Common/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Common/Button";

function WatchlistPage() {
  const coins1 = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (coins1) {
      setMyWatchlist(coins.filter((item) => coins1.includes(item.id)));
    }
  }, []);

  return (
    <div>
      <div style={{ minHeight: "90vh" }}>
        {myWatchlist?.length == 0 ? (
          <div>
            <Header />
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
              No Items in the Watchlist
            </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:"1rem" }}>
              <span>Add some Items from </span>
              <Button
                text={"Dashboard"}
                onClick={() => navigate("/dashboard")}
              />
            </div>
          </div>
        ) : (
          <div style={{ height: "95vh" }}>
            <Header />
            <TabsComponent setMyWatchlist={setMyWatchlist} isWatchlistPage={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchlistPage;
