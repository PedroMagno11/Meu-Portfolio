import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Links from "./links";
import ToggleButton from "../../../../meu-portfolio/src/components/sidebar/toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar(){
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};