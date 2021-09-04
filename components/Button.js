import styles from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <button
      className={styles.button}
      style={{ width: props.width, backgroundColor: props.bg }}
      type="button"
    >
      {props.title}
    </button>
  );
}
