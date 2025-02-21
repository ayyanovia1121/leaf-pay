import React from 'react'

const Button = ({styles}: any) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
}

export default Button