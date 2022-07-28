import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepperActions } from '../../hooks/useStepper';
import Button from '../elements/Button';
import SelectPlan from '../elements/Plan';
import TextField from '../elements/TextField';
import { RiTeamFill } from 'react-icons/ri';
import { FaUser, FaUserAlt } from 'react-icons/fa';
const Plan: React.FC<{}> = () => {
  const navigate = useNavigate();

  const { setStep } = useStepperActions();
  const [activeSelect, setActiveSelect] = useState<string>('self');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep({ step: 3, completed: true, active: false });
      navigate('/?step=4');
    }, 5000);
  };

  return (
    <section className="w-full mx-auto mt-32 text-secondary">
      <div className="mb-4">
        <h3 className="text-2xl font-medium text-center">
          How do you plan to use Eden?
        </h3>
      </div>
      <div>
        <p className="text-sm text-center text-tertiary">
          We'll streamline your setup experience accordingly
        </p>
      </div>
      <section className="grid grid-cols-2 gap-7 mt-6">
        <div className="mb-4">
          <SelectPlan
            icon={
              <FaUserAlt
                size={32}
                color={activeSelect === 'self' ? '#664DE5' : '#919AAD'}
              />
            }
            active={activeSelect === 'self'}
            onClick={() => setActiveSelect('self')}
          />
        </div>

        <div className="mb-6">
          <SelectPlan
            icon={
              <RiTeamFill
                size={32}
                color={activeSelect === 'team' ? '#664DE5' : '#919AAD'}
              />
            }
            active={activeSelect === 'team'}
            onClick={() => setActiveSelect('team')}
          />
        </div>
      </section>

      <div>
        <Button
          className="bg-primary text-light text-sm"
          label="Create Workspace"
          onClick={handleSubmit}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Plan;
