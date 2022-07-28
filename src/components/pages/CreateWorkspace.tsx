import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepperActions } from '../../hooks/useStepper';
import Button from '../elements/Button';
import TextField from '../elements/TextField';

const CreateWorkspace: React.FC<{}> = () => {
  const navigate = useNavigate();

  const { setStep } = useStepperActions();
  
  return (
    <section className="mt-32 text-secondary w-full mx-auto">
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
        <label htmlFor="" className="text-grey">
          Workspace Name
        </label>
        <TextField placeholder="Please enter Firstname" />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="text-grey">
          Workspace URL
        </label>
        <span className="text-tertiary">{'(Optional)'}</span>
        <TextField placeholder="Please enter Lastname" />
      </div>
      <div>
        <Button
          className="bg-primary text-light text-sm"
          label="Create Workspace"
          onClick={() => {
            setStep({ step: 2, completed: true, active: false });
            navigate('/?step=3');
          }}
        />
      </div>
    </section>
  );
};

export default CreateWorkspace;
