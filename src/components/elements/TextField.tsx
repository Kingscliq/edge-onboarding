// hello
import React, {
  ComponentProps,
  InputHTMLAttributes,
  JSXElementConstructor,
  useRef,
  useState,
} from 'react';

interface TextFieldProps {
  type?: string;
  placeholder?: string;
  value?: string | number | undefined;
  onClick?: () => void;
  error?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  success?: boolean;
  label?: string;
  inputRef?: string;
  message?: string;
  props?: ComponentProps<JSXElementConstructor<any>>;
}
const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  label,
  inputRef,
  message,
  props,
}) => {
  return (
    <div>
      <div>
        {label && (
          <label
            className="text-primary font-bold"
            style={{ color: error ? '#e11900 ' : '0' }}
          >
            {label}
          </label>
        )}

        <div
          className={[
            className,
            `border-[#c4c7fc93]  border-[1px] rounded bg-transparent w-full h-12 my-1 focus:border-primary ${
              error ? 'border-red-500' : '0'
            }`,
          ].join(' ')}
          // style={{
          //   borderColor: error ? 'red' : success ? '#2ecc71' : '#c4c7fc93',
          //   backgroundColor: error
          //     ? '#fdcdc7'
          //     : success
          //     ? '#e11900'
          //     : 'transparent',
          //   color: error ? '#e11900' : '',
          // }}
        >
          <input
            type={type || 'text'}
            className={
              'border outline-none rounded bg-transparent px-3 py-4 h-12 w-full focus:bg-transparent focus:border-primary transition-all duration-200 ease-in-out '
            }
            placeholder={placeholder || 'this is a placeholder'}
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            ref={inputRef}
            {...props}
          />
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default TextField;
