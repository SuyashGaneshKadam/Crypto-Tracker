import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../Assets/iphone.png";
import gradient from "../../../Assets/gradient.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";

function MainComponent() {
  const navigate = useNavigate();
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <Button text={"Dashboard"} onClick={() => navigate("/dashboard")} />
          <RWebShare
            data={{
              text: "CryptoTracker made using React JS",
              url: "https://crypto-tracker-rose-kappa.vercel.app/",
              title: "CrytoTracker.",
            }}
          >
            <Button text={"Share 🔗"} onClick={() => {}} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          alt="Phone"
          className="iphone"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="Gradient" className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
