import React from 'react';
import s from './TabsItem.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { changeActiveTab } from '../../store/reducers/tabSlice';

interface TabsItemProps {
  active: boolean;
  text: string;
}

const TabsItem: React.FC<TabsItemProps> = ({ active, text }) => {
  const dispatch = useAppDispatch();

  return (
    <li onClick={() => dispatch(changeActiveTab(text))} className={active ? `${s.item} ${s.item_active}` : `${s.item}`}>
      {text}
    </li>
  );
};

export default TabsItem;
