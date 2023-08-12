import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

import "./LoadingPage.css";

function LoadingPage() {
  const delayedSubtitile = "Just gather a few more bits of info...";

  const [activateSubtitle, setActivateSubtitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActivateSubtitle(true);
    }, 15000);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="loading-container"
    >
      <SyncLoader
        variants={fadeIn("up", "tween", 0.5, 0.5)}
        className="dots"
        color="#04a1b9"
        margin={15}
        size={30}
        speedMultiplier={1}
      />
      <div className="loading-text">
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          className="loading-title"
        >
          Give us just a moment while we do some digging
        </motion.h1>
        {activateSubtitle && (
          <h2
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            className="loading-subitle"
          >
            {delayedSubtitile}
          </h2>
        )}
      </div>
    </motion.div>
  );
}

export default LoadingPage;
