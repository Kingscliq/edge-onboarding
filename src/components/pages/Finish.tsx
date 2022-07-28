import React from 'react';
import { success } from '../../assets/icons';
import Button from '../elements/Button';
import TextField from '../elements/TextField';

const Finish: React.FC<{}> = () => {
  return (
    <section className=" mt-32 text-secondary">
      <div className="flex items-center justify-center mb-4">
        <img src={success} alt="" className="h-16 w-16" />
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-medium text-center">
          Congratulations, Eren!
        </h3>
      </div>
      <div className="mb-6">
        <p className="text-sm text-center text-tertiary">
          You have completed the onboarding, you can now start using the app.
        </p>
      </div>

      <div>
        <Button
          className="bg-primary text-light text-sm"
          label="Launch Eden"
          // onClick={() => {
          //   setStep({ step: 3, completed: true, active: false });
          //   navigate('/?step=4');
          // }}
        />
      </div>
    </section>
  );
};

export default Finish;
