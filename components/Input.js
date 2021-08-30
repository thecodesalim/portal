import styles from "../styles/Input.module.css";
export default function Input(props) {
  return (
    <div>
      <span className={styles.text}>{props.title}</span>
      <input className={styles.input} style={{ width: props.width }} />
    </div>
  );
}
