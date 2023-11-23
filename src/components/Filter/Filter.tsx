import React from 'react';
import s from './Filter.module.scss';
import FilterItem from '../FilterItem/FilterItem';
import { useAppSelector } from '../../store/hooks';

const Filter: React.FC = () => {
  const filters = useAppSelector((state) => state.filter.filters);

  return (
    <div className={s.filter}>
      <div className={s.title}>Количество пересадок</div>
      <ul className={s.list}>
        {filters.map((item) => (
          <FilterItem key={item.name} label={item.label} name={item.name} active={item.active} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
