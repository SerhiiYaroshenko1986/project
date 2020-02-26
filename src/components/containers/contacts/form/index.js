import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class MyForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          check: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("You must type your email in this field"),
          textarea: Yup.string().required(
            "Your message must be at least 6 characters"
          )
        })}
        onSubmit={fields => {
          alert("SUCCESS!! :-)");
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="header mb-3 text-md-center">WE HAPPY TO HELP!</div>
            <div className="form-group">
              <Field
                name="email"
                placeholder="youremail@mail.com"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group ">
              <Field
                style={{ height: "100px" }}
                name="textarea"
                placeholder="Type your message here"
                type="text"
                className={
                  "form-control pb-2" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="textarea"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group form-btn">
              <button type="submit" className="btn btn-primary mr-2">
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default MyForm;
