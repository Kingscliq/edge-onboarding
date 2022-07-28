import React from 'react';

interface StepperItemProps {
  label: string | number;
  active: boolean;
  completed: boolean;
  highlighted: boolean;
  lastChild?: boolean;
}

const StepperItem: React.FC<StepperItemProps> = ({
  label,
  active,
  completed,
  highlighted,
  lastChild,
}) => {
  return (
    <section className="flex items-center">
      <div
        className={`sm:h-[50px] sm:w-[50px] w-[30px] h-[30px] rounded-full border-tertiary border flex items-center justify-center ${
          (active || completed) && 'bg-primary text-white border-primary'
        }`}
      >
        <p>{label || 1}</p>
      </div>
      {lastChild ? null : (
        <div
          className={`lg:w-16 sm:w-12 w-7 h-[1px] bg-tertiary flex-auto ${
            (active || completed) &&
            'border-primary border bg-primary text-white h-[2px]'
          }`}
        ></div>
      )}
    </section>
  );
};

export default StepperItem;
