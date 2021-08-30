import styles from "../styles/InfoProfile.module.css";
export default function InfoProfile(props) {
  return (
    <div className={styles.moreDetail}>
      <p className={styles.type}>{props.type}</p>
      <p className={styles.value}>{props.value}</p>
    </div>
  );
}
