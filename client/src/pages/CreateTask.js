import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreateTask() {
  const initialValues = {
    title: "",
    taskText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    taskText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/tasks", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="createTaskPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateTask"
            name="title"
            placeholder="(Ex. Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="taskText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateTask"
            name="taskText"
            placeholder="(Ex.Task...)"
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreateTask"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <button type="submit"> Create Task</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateTask;
