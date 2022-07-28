import { FormikValues, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepperActions } from '../../hooks/useStepper';
import Button from '../elements/Button';
import TextField from '../elements/TextField';
import * as yup from 'yup';
interface FormValues extends FormikValues {
  fullName: string;
  displayName: string;
}

const initialValues: FormValues = {
  fullName: '',
  displayName: '',
};

const validationSchema = yup.object({
  fullName: yup.string().required('Fullname is Required'),
  displayName: yup.string().required('Display Name is required'),
});

const Welcome: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { setStep } = useStepperActions();
  const [loading, setLoading] = useState<boolean>(false);
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<FormValues>({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async values => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setStep({ step: 1, completed: true, active: true });
          navigate('/?step=2');
        }, 5000);
      },
    });

  return (
    <section className="mt-16 text-secondary w-full mx-auto">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="mb-4">
          <h3 className="lg:text-3xl text-xl font-medium text-center">
            Welcome! First things first...
          </h3>
        </div>
        <div>
          <p className="text-sm text-center text-tertiary">
            You can always change them later
          </p>
        </div>
        <div className="mt-12 mb-4">
          <label
            htmlFor=""
            className={`text-grey ${errors.fullName && 'text-red-400'}`}
          >
            Full Name
          </label>
          <TextField
            placeholder="Please enter fullName"
            name="fullName"
            value={values.fullName}
            error={!!errors.fullName && touched.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div className="mb-4">
              <small className="text-red-400">{errors.fullName}</small>
            </div>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor=""
            className={`text-grey ${errors.displayName && 'text-red-400'}`}
          >
            Display Name
          </label>
          <TextField
            placeholder="Please enter Display Name"
            name="displayName"
            value={values.displayName}
            onChange={handleChange}
            error={!!errors.displayName && touched.displayName}
          />
          {errors.displayName && (
            <div className="mb-4">
              <small className="text-red-400">{errors.displayName}</small>
            </div>
          )}
        </div>
        <div>
          <Button
            className="bg-primary text-light text-sm"
            label="Create Workspace"
            type="submit"
            loading={loading}
          />
        </div>
      </form>
    </section>
  );
};

export default Welcome;
