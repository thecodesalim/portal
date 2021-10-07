import React, { Component } from "react";
import { useFormikContext, useField } from "formik";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

export default function Select(props) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div style={{ margin: "10px" }}>
      <span style={{ marginRight: "10px" }}> State of Orgin</span>
      <RegionDropdown
        {...field}
        {...props}
        name="country"
        country="Nigeria"
        value={field.value || null}
        onChange={(val) => {
          console.log(val, "value");
          setFieldValue(field.name, val);
        }}
      />
    </div>
  );
}
