import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import imgScroll from "../../images/scroll.png"


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Pedro Magno</motion.h2>
          <motion.h1 variants={textVariants}>
            FullStack Developer
          </motion.h1>
          <motion.div variants={textVariants} className={styles.buttons}>
            <motion.a href="#whatIDid" variants={textVariants}>
              Ver meus projetos
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>Contato</motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={imgScroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className={styles.slidingTextContainer}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FullStack Developer
      </motion.div>
    </div>
  );
};

export default Hero;
