import React, { ReactElement } from 'react';
import { FaUserAlt } from 'react-icons/fa';
interface PlanProps {
  type?: string;
  icon?: ReactElement;
  title?: string;
  description?: string;
  active?: boolean;
  onClick?: () => void;
}

const SelectPlan: React.FC<PlanProps> = ({
  icon,
  title,
  description,
  active,
  onClick,
}) => {
  return (
    <section
      className={`w-full p-4 border border-tertiary py-8 rounded ${
        active &&
        'border border-primary transition-all duration-500 ease-linear'
      } `}
      onClick={onClick}
    >
      <div className="">
        {icon || (
          <FaUserAlt size={32} color={`${active ? '#664DE5 ' : '919AAD'}`} />
        )}
      </div>
      <div className="my-4">
        <h3 className="text-md text-grey font-bold">{title || 'For Myself'}</h3>
      </div>
      <div>
        <p className="text-sm text-tertiary">
          {description || 'Write better, Think more clearly. Stay organized'}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default SelectPlan;
