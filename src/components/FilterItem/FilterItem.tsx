import React from 'react';
import s from './FilterItem.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { toggleFilter } from '../../store/reducers/filterSlice';

interface FilterItemProps {
  label: string;
  name: string;
  active: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, name, active }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={s.item}>
      <input type="checkbox" id={name} name={name} checked={active} onChange={() => dispatch(toggleFilter(name))} />
      <label htmlFor={name}>{label}</label>
    </li>
  );
};

export default FilterItem;
