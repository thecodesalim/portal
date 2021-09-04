import { Field } from "formik";
import styles from "../styles/Input.module.css";
export default function Input(props) {
  return (
    <div>
      {/* <span className={styles.text}>{props.title}</span>
      <input className={styles.input} style={{ width: props.width }} /> */}
      <label className={styles.text} htmlFor={props.htmlFor}>
        {props.title}
      </label>
      <Field
        className={styles.input}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}
