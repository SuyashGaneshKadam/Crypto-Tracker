import React from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import "./styles.css";

function BackToTop() {
  let mybutton;

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    mybutton = document.getElementById("myBtn");
    if (mybutton) {
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon sx={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;
