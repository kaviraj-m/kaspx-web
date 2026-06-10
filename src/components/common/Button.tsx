import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  smooth?: boolean;
}

const buttonClassName = (extra = '') =>
  `cursor-pointer relative bg-black/5 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group inline-flex w-fit max-w-full items-center justify-start hover:bg-[#2ccbb5] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000040] no-underline ${extra}`;

const ButtonInner = ({ children }: { children: React.ReactNode }) => (
  <>
    <span className="absolute flex px-1 py-0.5 justify-start items-center inset-0 pointer-events-none">
      <span className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
      <span className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_rgba(0,0,0,0.2)] h-full aspect-square bg-[#2ccbb5] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
        <span className="size-[0.8rem] text-white group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
            <path
              fill="currentColor"
              d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
            />
          </svg>
        </span>
      </span>
    </span>
    <span className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black font-bold text-sm">
      {children}
    </span>
  </>
);

const Button: React.FC<ButtonProps> = ({ children, className = '', to, smooth = true, ...props }) => {
  if (to) {
    const isHash = to.includes('#');
    const classes = buttonClassName(className);

    if (isHash) {
      return (
        <NavHashLink smooth={smooth} to={to} className={classes}>
          <ButtonInner>{children}</ButtonInner>
        </NavHashLink>
      );
    }

    return (
      <Link to={to} className={classes}>
        <ButtonInner>{children}</ButtonInner>
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClassName(className)} {...props}>
      <ButtonInner>{children}</ButtonInner>
    </button>
  );
};

export default Button;
