import { FormikValues, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepperActions } from '../../hooks/useStepper';
import Button from '../elements/Button';
import TextField from '../elements/TextField';
import * as yup from 'yup';

// Create Workspace
interface FormValues extends FormikValues {
  workSpaceName: string;
  workSpaceUrl: string;
}

// Initial values
const initialValues: FormValues = {
  workSpaceName: '',
  workSpaceUrl: '',
};

// Set Validation Schema for Error handling
const validationSchema = yup.object({
  workSpaceName: yup.string().required('WorkSpace Name is Required'),
  workSpaceUrl: yup.string().required('WorkSpace URL is required'),
});

// Create Workspace
const CreateWorkspace: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { setStep } = useStepperActions();
  const [loading, setLoading] = useState<boolean>(false);

  // Initalize Formik
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<FormValues>({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async values => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setStep({ step: 2, completed: true, active: false });
          navigate('/?step=3');
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
          <h3 className="text-2xl font-medium text-center">
            Lets Set up a Workspace for us all
          </h3>
        </div>
        <div>
          <p className="text-sm text-center text-tertiary">
            You can always create a new workspace later
          </p>
        </div>
        <div className="mt-12 mb-4">
          <label
            htmlFor=""
            className={`text-grey ${errors.workSpaceName && 'text-red-400'}`}
          >
            Workspace Name
          </label>
          <TextField
            placeholder="Please enter WorkSpace Name"
            name="workSpaceName"
            value={values.workSpaceName}
            error={!!errors.workSpaceName && touched.workSpaceName}
            onChange={handleChange}
          />
          {errors.workSpaceName && (
            <div className="mb-4">
              <small className="text-red-400">{errors.workSpaceName}</small>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor=""
            className={`text-grey ${errors.workSpaceUrl && 'text-red-400'}`}
          >
            Workspace URL
          </label>
          <TextField
            placeholder="Please enter WorkSpace URL e.g https://example.com"
            name="workSpaceUrl"
            value={values.workSpaceUrl}
            error={!!errors.workSpaceUrl && touched.workSpaceUrl}
            onChange={handleChange}
            type="url"
          />
          {errors.workSpaceUrl && (
            <div className="mb-4">
              <small className="text-red-400">{errors.workSpaceUrl}</small>
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

export default CreateWorkspace;
