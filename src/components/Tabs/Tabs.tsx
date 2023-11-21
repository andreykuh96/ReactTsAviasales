import React from 'react';
import s from './Tabs.module.scss';
import TabsItem from '../TabsItem/TabsItem';

const Tabs: React.FC = () => {
  return (
    <ul className={s.tabs}>
      <TabsItem text="Самый дешевый" active />
      <TabsItem text="Самый быстрый" active={false} />
      <TabsItem text="Оптимальный" active={false} />
    </ul>
  );
};

export default Tabs;
