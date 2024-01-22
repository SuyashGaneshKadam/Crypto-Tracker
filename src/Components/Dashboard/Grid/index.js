import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchList";
import { IconButton, Tooltip } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Grid({ coin, i, isWatchlistPage, setMyWatchlist }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link
      to={`/coin/${coin.id}`}
      style={{ display: isWatchlistPage && !added && "none" }}
    >
      <div
        key={i}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img className="coin-logo" src={coin.image} />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <Tooltip
            title={added ? "Remove from Watchlist " : "Add to Watchlist"}
            placement="bottom-end"
          >
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (added) {
                  if (removeFromWatchlist(coin.id)) {
                    setAdded(false);
                    if (isWatchlistPage) {
                      setMyWatchlist(
                        JSON.parse(localStorage.getItem("watchlist"))
                      );
                    }
                  }
                } else {
                  addToWatchlist(coin.id);
                  setAdded(true);
                }
              }}
            >
              {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}
            </IconButton>
          </Tooltip>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div>
              <TrendingUpRoundedIcon className="icon-chip" />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div>
              <TrendingDownRoundedIcon className="icon-chip chip-red" />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">
            Total Volume : ${coin.total_volume.toLocaleString()}
          </p>
          <p className="market_cap">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
