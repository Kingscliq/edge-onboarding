import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepperActions } from '../../hooks/useStepper';
import Button from '../elements/Button';
import TextField from '../elements/TextField';

const Welcome: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { setStep } = useStepperActions();

  return (
    <section className="mt-32 text-secondary w-full mx-auto">
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
        <label htmlFor="" className="text-grey">
          Firstname
        </label>
        <TextField placeholder="Please enter Firstname" />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="text-grey">
          Lastname
        </label>
        <TextField placeholder="Please enter Lastname" />
      </div>
      <div>
        <Button
          className="bg-primary text-light text-sm"
          label="Create Workspace"
          onClick={() => {
            setStep({ step: 1, completed: true, active: true });
            navigate('/?step=2');
          }}
        />
      </div>
    </section>
  );
};

export default Welcome;
