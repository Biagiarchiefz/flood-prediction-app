/**
 * Reveal — animasi kemunculan elemen: fade + scale 0.95→1 + translateY kecil,
 * memakai spring yang halus. Dipakai untuk memunculkan hasil prediksi.
 */

import { motion, useReducedMotion } from "motion/react";

function Reveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : { type: "spring", stiffness: 220, damping: 22, delay }
      }
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
