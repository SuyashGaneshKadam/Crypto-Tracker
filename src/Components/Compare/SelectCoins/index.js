import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../Functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
import coins from "../../../Data/Coins";
import "./styles.css";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  //   const [allCoins, setAllCoins] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   async function getData() {
  //     const myCoins = await get100Coins();
  //     setAllCoins(myCoins);
  //   }

  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {coins.map((coin, i) => (
          <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {coins.map((coin, i) => (
          <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
