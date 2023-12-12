import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact(props){
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_b6rropb",
        "template_8bpvuw5",
        formRef.current,
        "8en2tzSqdXcYxpcUU"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div
      id={props.id}
      ref={ref}
      className={styles.contact}
    >
      <div className={styles.textContainer}>
        <h1>Vamos trabalhar juntos</h1>
        <div className={styles.item}>
          <h2>E-mail</h2>
          <span>contato@pedromagno.com.br</span>
        </div>
        <div className={styles.item}>
          <h2>Telefone</h2>
          <span>(21)99174-6678</span>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </div>
  );
};