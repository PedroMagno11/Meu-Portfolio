import { useRef } from "react";
import styles from "./styles.module.scss";
import calc from "../../images/calculadora.png";
import classifica from "../../images/classificadorDeNivel.png";
import gitFinder from "../../images/gitFinder.png";
import detonaRalph from "../../images/detonaRalph.png";
import memoria from "../../images/jogoDaMemoria.png";

const items = [
    {
      id: 1,
      title: "React Calculator",
      img: calc,
      href: "https://calculadora-reactjs-three.vercel.app/",
      desc: "Calculadora desenvolvida utilizando a biblioteca ReactJS. Ela oferece funcionalidades básicas de uma calculadora, permitindo aos usuários realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão.",
    },
    {
      id: 2,
      title: "Classificar de nível de herói",
      img: classifica,
      href: "https://classificador-nivel-de-heroi-js.vercel.app/",
      desc: "O objetivo deste projeto foi criar um sistema de classificação para personagens com base na quantidade de experiência (XP) que possuem. Cada personagem é identificado por um nome e um valor de XP. O sistema classifica o personagem em diferentes rankings de acordo com sua XP acumulada.",
    },
    {
      id: 3,
      title: "GitFinder",
      img: gitFinder,
      href:"https://git-finder-ten.vercel.app/index.html",
      desc: "O GitFinder é uma plataforma que permite aos usuários buscar e visualizar perfis do GitHub junto com seus repositórios.",
    },
    {
      id: 4,
      title: "Detona Ralph JS",
      img: detonaRalph,
      href:"https://detona-ralph-js.vercel.app/",
      desc: "Este jogo foi desenvolvido utilizando tecnologias web como HTML, CSS e JavaScript para criar uma experiência interativa e responsiva. A lógica por trás do funcionamento do jogo envolve o gerenciamento do tempo, a contagem de pontos, a manipulação dos elementos da interface e a detecção dos cliques.",
    },
    {
      id: 5,
      title: "Jogo da Memória JS",
      img: memoria,
      href:"https://jogo-da-memoria-js-iota.vercel.app/",
      desc: "Teste suas habilidades de concentração e memória enquanto tenta encontrar todos os pares de cartas correspondentes. Com gráficos simples e jogabilidade cativante, este jogo é perfeito para todas as idades. Desenvolva suas habilidades cognitivas enquanto se diverte tentando vencer o jogo no menor número de moviementos possível.",
    },
  ];
  


const Single = ({ item }) => {
  const ref = useRef();

  return (
    <section >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer} ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.textContainer}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank">See Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio(){
    const ref = useRef();

    return(
    <div className={styles.portfolio} ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
