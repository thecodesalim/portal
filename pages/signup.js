import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Input from "../components/Input";

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          pin: "",
          title: "",
          firstName: "",
          lastName: "",
          middleName: "",
          bloodGroup: "",
          homeAddress: "",
          employer: "",
          officeAddress: "",
          phoneNo: "",
          email: "",
          vechicleMake: "",
          vechicleRegNo: "",
          DrivingLicenseNo: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Input title="Pin" htmlFor="pin" id="pin" name="pin" placeholder="" />
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
