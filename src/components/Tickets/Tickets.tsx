import React from 'react';
import s from './Tickets.module.scss';
import TicketsItem from '../TicketsItem/TicketsItem';

const Tickets: React.FC = () => {
  return (
    <ul className={s.tickets}>
      <TicketsItem />
      <TicketsItem />
      <TicketsItem />
      <TicketsItem />
      <TicketsItem />
    </ul>
  );
};

export default Tickets;
