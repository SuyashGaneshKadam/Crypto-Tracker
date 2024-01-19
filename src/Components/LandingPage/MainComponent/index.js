import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../Assets/iphone.png";
import gradient from "../../../Assets/gradient.png";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
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
