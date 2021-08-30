import styles from "../styles/InfoContent.module.css";
export default function InfoContent(props) {
  return (
    <div className={styles.moreDetail}>
      <p className={styles.type}>{props.type}</p>
      <p className={styles.value}>{props.value}</p>
    </div>
  );
}
