import { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type , id}){

        const ref = useRef();

        const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return(
        <div
        id={id}
        className={styles.parallax}
        ref={ref}
        style={{
          background:
            type === "services"
              ? "linear-gradient(180deg, #111132, #0c0c1d)"
              : "linear-gradient(180deg, #111132, #505064)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "Minhas Skills" : "O que eu fiz"}
        </motion.h1>
        <motion.div className={styles.mountains}></motion.div>
        <motion.div
          className={styles.planets}
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "services" ? "./images/planets.png" : "./images/sun.png"
            })`,
          }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className={styles.stars}></motion.div>
      </div>
    )
}