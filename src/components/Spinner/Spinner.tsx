import React from 'react';
import s from './Spinner.module.scss';
import spinner from './spinner.svg';

const Spinner: React.FC = () => {
  return (
    <div className={s.spin}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
