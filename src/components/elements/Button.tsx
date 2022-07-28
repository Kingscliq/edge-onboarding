import React from 'react';
import BtnLoader from './BtnLoader';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  onClick?: () => void;
  onMouseOver?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  loadingIcon?: string;
  btnIcon?: string;
  variant?: string;
}
const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  loadingText,
  className,
  loadingIcon,
  btnIcon,
  variant,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[
        `w-full px-6 py-3 relative hover:opacity-90 transition-all duration-500 ease-linear rounded`,
        className,
      ].join(' ')}
      style={{
        cursor: loading || disabled ? 'not-allowed' : '0',
        opacity: loading || disabled ? '.68' : 'nill',
      }}
    >
      {loading ? (
        <div className="flex justify-center align-middle">
          <BtnLoader />
        </div>
      ) : (
        <div>
          {btnIcon && 'btnICon'}
          <p>{label || 'Button Text'}</p>
        </div>
      )}
    </button>
  );
};

export default Button;
