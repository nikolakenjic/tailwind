// import { styled } from 'styled-components';

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// export default Button;

import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-2 py-4 font-semibold uppercase rounded text-stone-500 bg-amber-500 mx-4 hover:bg-amber-600 hover:text-stone-200 active:bg-amber-700"
    >
      {children}
    </button>
  );
};

export default Button;
