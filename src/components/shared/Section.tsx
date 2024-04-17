//  Imports
// ===========================================================

import React from 'react';


//  Types
// ===========================================================

type ContainerProps = {
  id?: string;
  className?: string;
  children: string | React.JSX.Element | React.JSX.Element[];
}

type ContentProps = {
  className?: string;
  children: string | React.JSX.Element | React.JSX.Element[];
}


//  Titles (variants)
// ===========================================================

export const Container: React.FC<ContainerProps> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`
        w-full h-fit
        flex flex-col justify-center items-center
        p-3 tablet:p-6 laptop:p-12 desktop:p-16
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export const Content: React.FC<ContentProps> = ({ className, children }) => {
  return (
    <div className={`
      w-full h-fit max-w-[1400px]
      flex flex-col justify-center items-center laptop:flex-row
      ${className}
    `}>
      {children}
    </div>
  );
}
