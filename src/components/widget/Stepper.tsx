// hello
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStepper } from '../../hooks/useStepper';
import StepperItem from '../elements/stepper/StepperItem';

interface StepperProps {
  type?: string;
}

const Stepper: React.FC<StepperProps> = ({}) => {
  const { steps } = useStepper();
  const [search] = useSearchParams();

  const queryParams = search.get('step');

  return (
    <div className="lg:w-96 w-full mx-auto px-4 ">
      <div className="flex items-center justify-center w-full">
        {steps.map((item, index) => (
          <>
            <StepperItem
              label={item.step}
              active={item.step === Number(queryParams) || index === 0}
              completed={item.completed}
              highlighted={false}
              lastChild={index === steps.length - 1}
              key={index}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
