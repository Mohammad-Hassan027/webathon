// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./transtionVarient";

function PageWrapper({ children, key }) {
  return (
    <motion.div
      key={key}
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
