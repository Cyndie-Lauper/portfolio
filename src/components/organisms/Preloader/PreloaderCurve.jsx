import { motion } from 'framer-motion';

export default function PreloaderCurve({ curve }) {
  return (
    <svg>
      <motion.path
        variants={curve}
        initial="initial"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
