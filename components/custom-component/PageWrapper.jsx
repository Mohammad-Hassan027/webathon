// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./transtionVarient";

function PageWrapper({ children }) {
  return (
    <motion.div
      key={Math.random()} // ensure remount on navigation so AnimatePresence sees change
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
export default PageWrapper;
