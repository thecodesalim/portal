import styles from "../styles/MiniCard.module.css";
export default function FinHeader({}) {
  return (
    <div className={styles.container}>
      <p className={styles.bold}>YEAR</p>
      <p className={styles.bold}>DESCRIPTION</p>
      <p className={styles.bold}>DEBT</p>
      <p className={styles.bold}>AMOUNT PAID</p>
      <p className={styles.bold}>BALANCE</p>
    </div>
  );
}

export function FinInfo({}) {
  return (
    <div className={styles.info_container}>
      <p className={styles.bold}>2021</p>
      <p className={styles.bold}>Annual Subscription</p>
      <p className={styles.bold}>6500</p>
      <p className={styles.bold}>6500</p>
      <p className={styles.bold}>0</p>
    </div>
  );
}
