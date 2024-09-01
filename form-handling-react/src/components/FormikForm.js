// src/components/FormikForm.js
import React from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/form-handling-react/node_modules/@types/react';
import { Formik, Form, Field, ErrorMessage } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/form-handling-react/node_modules/formik';
import * as Yup from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/form-handling-react/node_modules/yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);

    // Simulate API request
    // fetch('https://mockapi.example.com/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error))
    //   .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
