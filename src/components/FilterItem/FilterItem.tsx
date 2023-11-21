import React from 'react';
import s from './FilterItem.module.scss';

interface FilterItemProps {
  label: string;
  name: string;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, name }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" id={name} name={name} />
      <label htmlFor={name}>{label}</label>
    </li>
  );
};

export default FilterItem;
