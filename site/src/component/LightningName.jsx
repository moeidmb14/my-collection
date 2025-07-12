import React, { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import lightningSound from "../assets/lightning.mp3";

export default function LightningName({ name }) {
  const [showEffect, setShowEffect] = useState(false);
  const [play] = useSound(lightningSound);

  const handleClick = () => {
    setShowEffect(true);
    play();
    setTimeout(() => setShowEffect(false), 2000);
  };

  return (
    <div className="text-center my-8 relative">
      <h1
        className="text-4xl font-bold cursor-pointer"
        onClick={handleClick}
      >
        {name}
      </h1>
      {showEffect && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2 }}
        >
          <div className="w-32 h-32 rounded-full bg-purple-500 opacity-30 blur-2xl"></div>
        </motion.div>
      )}
    </div>
  );
}