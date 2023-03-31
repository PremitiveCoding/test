import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddUserForm = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:8080/user/add", values)
      .then(() => {
        alert("User added successfully");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while adding the user");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              className={`form-control ${
                touched.name && errors.name ? "is-invalid" : ""
              }`}
            />
            {touched.name && errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
            />
            {touched.email && errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserForm;
