import { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import Card from "../Card";

import coding  from "../../images/coding.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import sass from "../../images/sass.png";
import js from "../../images/js.png";
import ts from "../../images/typescript.png";
import b from "../../images/bootstrap.png";
import react from "../../images/react.png";
import next from  "../../images/next.png";
import node from "../../images/node.png";
import c  from "../../images/c.png";
import cplus from "../../images/cplus.png";
import csharp from "../../images/csharp.png";
import mysql from "../../images/mysql.png";
import mongoDB from "../../images/mongodb.png";


export default function Services(){

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className={styles.services}>
      <div className={styles.textContainer}>
        <p>
        Conectando ideias, criando experiências - 
          <br />construindo um mundo digital inovador
        </p>
        <hr />
      </div>
      <div className={styles.titleContainer}>
          <div className={styles.title}>
          <img src={coding} alt="" />
          <h1><motion.b whileHover={{color:"rebeccapurple"}}>Linguagens de Programação </motion.b></h1>
        </div>
        <div className={styles.title}>
          <h1> e <motion.b whileHover={{color:"rebeccapurple"}}>Frameworks.</motion.b></h1>
          <a href="#whatIDid">O que eu fiz</a>
        </div>
      </div>
      <div className={styles.listContainer}>
        <Card img={html} label="HTML" href="https://developer.mozilla.org/en-US/docs/Web/HTML"/>
        <Card img={css} label="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
        <Card img={sass} label="Sass" href="https://sass-lang.com/"/>
        <Card img={js} label="JS" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
        <Card img={ts} label="TS" href="https://www.typescriptlang.org/"/>
        <Card img={b} label="Bootstrap" href="https://getbootstrap.com/"/>
        <Card img={react} label="ReactJS" href="https://pt-br.react.dev/"/>
        <Card img={next} label="NextJS" href="https://nextjs.org/"/>
        <Card img={node} label="NodeJS" href="https://nodejs.org/en"/>
        <Card img={c} label="C" href="https://learn.microsoft.com/pt-br/cpp/c-language/?view=msvc-170"/>
        <Card img={cplus} label="C++" href="https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170"/>
        <Card img={csharp} label="C#" href="https://learn.microsoft.com/pt-br/dotnet/csharp/"/>
        <Card img={mysql} label="MySql" href="https://dev.mysql.com/doc/"/>
        <Card img={mongoDB} label="MongoDB" href="https://www.mongodb.com/docs/"/>
      </div>
    </div>
  );
};
