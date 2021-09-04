import { Formik, Field, Form } from "formik";

export default function RadioGroup(props) {
  return (
    <div id="my-radio-group">
      Regalia
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="picked" value="One" />
          One
        </label>
        <label>
          <Field type="radio" name="picked" value="Two" />
          Two
        </label>
        {/* <div>Picked: {props.values.picked}</div> */}
      </div>
    </div>
  );
}
