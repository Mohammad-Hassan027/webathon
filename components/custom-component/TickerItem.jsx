// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TickerItem = ({ item }) => {
  return (
    <motion.div
      tabIndex={0}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-md outline-none flex gap-3 items-center justify-center p-3 cursor-pointer"
    >
      <picture className="flex flex-col items-center">
        <motion.img
          src={item.image}
          alt={item.title}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="object-cover w-44 h-44 sm:w-88 sm:h-88"
          onClick={() => window.open(item.image, "_blank")}
        />
      </picture>
    </motion.div>
  );
};

export default TickerItem;
