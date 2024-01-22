import { Bounce, toast } from "react-toastify";

export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure you want to remove this coin?")) {
    let items = localStorage.getItem("watchlist");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item != id))
    );
    toast.success(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } - Removed from the Watchlist!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    return true;
  } else {
    toast.error("Couldn't remove the coin from the watchlist!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
};
