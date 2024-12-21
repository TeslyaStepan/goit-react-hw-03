import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

export default function ContactForm({ addNewContact }) {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Має бути не менше трьох символів")
      .max(50, "50 симовлів це ваш максимум")
      .required("Це поле обовʼязкове"),
    number: Yup.number().required("Це поле обовʼязкове"),
  });
  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        addNewContact(values);
        resetForm();
      }}
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name"></Field>
        <ErrorMessage component="span" name="name" />
        <label htmlFor="number">Number</label>
        <Field type="tel" name="number"></Field>
        <ErrorMessage component="span" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
