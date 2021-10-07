import Link from "next/link";
import { BiMoney, BiAward, BiStar } from "react-icons/bi";
import styles from "../styles/NavButton.module.css";
export default function NavButton({ title, page, icon }) {
  return (
    <Link href={page}>
      <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <button className={styles.button} type="button">
          {title}
        </button>
      </div>
    </Link>
  );
}
