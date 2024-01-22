import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton, Tooltip } from "@mui/material";
import { convertNumber } from "../../../Functions/convertNumber";
import { Link } from "react-router-dom";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchList";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function List({ coin, i, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr
        className="list-row"
        key={i}
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <Tooltip title="Logo" placement="bottom-start">
          <td className="td-image">
            <img className="coin-logo" src={coin.image} />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price change in 24 hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price">
          <td>
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td>
            <p className="total_volume td-right-align td-total-volume">
              ${coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="market_cap td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="market_cap td-right-align">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
        <Tooltip
          title={added ? "Remove from Watchlist " : "Add to Watchlist"}
          placement="bottom-end"
        >
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
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
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List;
