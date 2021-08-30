import styles from "../styles/Card.module.css";
export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <div className={styles.text}>
        <p>{props.title}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
}
