import styles from "../styles/EditModal.module.css";
import Input from "./Input";
export default function EditModal() {
  return (
    <>
      <div className={styles.grid}>
        <Input title="Home Address" />
      </div>
      <div className={styles.grid}>
        <Input title="Employer" />
        <Input title="Office Address" />
      </div>
      <div className={styles.grid}>
        <Input title="Phone No" />
        <Input title="Email" />
      </div>
    </>
  );
}
