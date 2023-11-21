import React from 'react';
import s from './TabsItem.module.scss';

interface TabsItemProps {
  active: boolean;
  text: string;
}

const TabsItem: React.FC<TabsItemProps> = ({ active, text }) => {
  return <li className={active ? `${s.item} ${s.item_active}` : `${s.item}`}>{text}</li>;
};

export default TabsItem;
