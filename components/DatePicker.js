import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext, useField } from "formik";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Calender(props) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
      <span>{props.title}</span>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    </div>
  );
}
