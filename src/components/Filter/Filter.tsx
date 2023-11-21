import React from 'react';
import s from './Filter.module.scss';
import FilterItem from '../FilterItem/FilterItem';

const Filter: React.FC = () => {
  return (
    <div className={s.filter}>
      <div className={s.title}>Количество пересадок</div>
      <ul className={s.list}>
        <FilterItem label="Все" name="all" />
        <FilterItem label="Без пересадок" name="not" />
        <FilterItem label="1 пересадка" name="one" />
        <FilterItem label="2 пересадка" name="two" />
        <FilterItem label="3 пересадка" name="three" />
      </ul>
    </div>
  );
};

export default Filter;
