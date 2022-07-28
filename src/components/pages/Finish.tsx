import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { RiRefreshFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { success } from '../../assets/icons';
import { useAuth } from '../../hooks/useAuthActions';
import Button from '../elements/Button';

const Finish: React.FC<{}> = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <section className="mt-16 text-secondary">
      <div className="flex items-center justify-center mb-4">
        <img src={success} alt="" className="h-16 w-16" />
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-medium text-center">
          Congratulations, {user.displayName}!
        </h3>
      </div>
      <div className="mb-6">
        <p className="text-sm text-center text-tertiary">
          You have completed the onboarding, you can now start using the app.
        </p>
      </div>
      <div>
        <Button className="bg-primary text-light text-sm" label="Launch Eden" />
      </div>
      <div className="mt-16 w-full flex items-center justify-center">
        <button
          className="text-tertiary text-center flex items-center text-xs"
          onClick={() => {
            localStorage.clear();
            navigate('/?step=1');
            location.reload();
          }}
        >
          <div>
            <FaArrowCircleLeft />
          </div>
          <div className="ml-2">Refresh</div>
        </button>
      </div>
    </section>
  );
};

export default Finish;
