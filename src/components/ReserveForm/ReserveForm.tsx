import * as Yup from 'yup';
import { useState } from 'react';
import content from '../../assets/locales/en.json';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import './ReserveForm.scss';

type ReservationForm = {
  date: string;
  time: string;
  diners: number;
  name: string;
  email: string;
  phone: string;
};

const ReservationForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .min(today, content.noPastDate)
      .required(content.dateRequired),
    time: Yup.string().required(content.timeRequired),
    diners: Yup.number()
      .required(content.numberOfPeopleRequired)
      .min(1, content.invalidNumberOfPeople)
      .max(10, content.invalidNumberOfPeople),
    name: Yup.string().required(content.nameRequired),
    email: Yup.string()
      .email(content.invalidEmail)
      .required(content.invalidEmail),
    phone: Yup.string()
      .required(content.phoneRequired)
      .matches(/^\+?[0-9\s-]{7,15}$/, 'Invalid phone number format'),
  });

  const handleSubmit = (
    _: ReservationForm,
    { resetForm }: { resetForm: () => void },
  ) => {
    console.log('handle submit called');
    setSuccessMessage(content.reservationSuccess);

    setTimeout(() => {
      setSuccessMessage(null);
      resetForm();
    }, 3000);
  };

  return (
    <Formik<ReservationForm>
      initialValues={{
        date: '',
        time: '',
        diners: 1,
        name: '',
        email: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="form">
          <h1 className="title">{content.reserveATable}</h1>
          {successMessage && <p className="success">{successMessage}</p>}
          <div className="halfGrouping">
            <div className="fieldGroup">
              <label htmlFor="date">{content.date}</label>
              <Field
                type="date"
                name="date"
                id="date"
                placeholder={content.datePlaceholder}
              />
              <ErrorMessage name="date" component="p" className="error" />
            </div>

            <div className="fieldGroup">
              <label htmlFor="time">{content.time}</label>
              <Field as="select" name="time" id="time">
                <option value="">{content.selectATime}</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </Field>
              <ErrorMessage name="time" component="p" className="error" />
            </div>

            <div className="fieldGroup">
              <label htmlFor="diners">{content.numberOfPeople}</label>
              <Field
                type="number"
                name="diners"
                id="diners"
                min="1"
                placeholder={content.dinersPlaceholder}
              />
              <ErrorMessage name="diners" component="p" className="error" />
            </div>
          </div>

          <div className="halfGrouping">
            <div className="fieldGroup">
              <label htmlFor="name">{content.name}</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={content.namePlaceholder}
              />
              <ErrorMessage name="name" component="p" className="error" />
            </div>

            <div className="fieldGroup">
              <label htmlFor="email">{content.email}</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={content.emailPlaceholder}
              />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className="fieldGroup">
              <label htmlFor="phone">{content.phone}</label>
              <Field
                type="tel"
                name="phone"
                id="phone"
                placeholder={content.phonePlaceholder}
              />
              <ErrorMessage name="phone" component="p" className="error" />
            </div>
          </div>

          <Button
            type="submit"
            label="Reserve table"
            disabled={isSubmitting || !(isValid && dirty)}
            variant="contained"
            color="warning"
            onClick={() => {}}
            path=""
          />
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
