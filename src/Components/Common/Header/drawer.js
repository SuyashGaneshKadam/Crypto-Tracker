import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
      toast.success("Theme Changed!", {
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setDark();
      toast.success("Theme Changed!", {
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-div">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <p className="link">Dashboard</p>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
