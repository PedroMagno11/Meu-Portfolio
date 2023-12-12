import styles from  "./styles.module.scss";

export default function Card(props){
    return(
        <>
        <div className={styles.wrapper}>
          <img src={props.img} alt={props.label}/>
          <a href={props.href} target="_blank">{props.label}</a>
        </div>
        </>
    );
}
