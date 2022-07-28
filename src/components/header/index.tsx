import React from 'react';
import { logo } from '../../assets/icons';
import Stepper from '../widget/Stepper';
const Header: React.FC<{}> = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="flex items-center justify-center my-6">
          <img src={logo} alt="" />
        </div>
      </div>
      <Stepper />
    </div>
  );
};

export default Header;
