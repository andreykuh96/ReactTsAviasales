import React from 'react';
import s from './Tabs.module.scss';
import TabsItem from '../TabsItem/TabsItem';
import { useAppSelector } from '../../store/hooks';

const Tabs: React.FC = () => {
  const tabs = useAppSelector((state) => state.tab.tabs);

  return (
    <ul className={s.tabs}>
      {tabs.map((item) => (
        <TabsItem key={item.text} active={item.active} text={item.text} />
      ))}
    </ul>
  );
};

export default Tabs;
