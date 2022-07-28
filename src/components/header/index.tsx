import React from 'react';
import { logo } from '../../assets/icons';
import Stepper from '../widget/Stepper';
const Header: React.FC<{}> = () => {
  return (
    <div className="mb-6">
      <div className="mx-auto w-full flex items-center justify-center mb-8">
        <div className="flex items-center justify-center my-6  h-auto w-28">
          <img src={logo} alt="" className="w-full" />
        </div>
      </div>
      <Stepper />
    </div>
  );
};

export default Header;
