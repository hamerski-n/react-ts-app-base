import React from 'react';

interface IProps {
  children: any;
}

const GeneralLayout = ({ children }: IProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default GeneralLayout;
