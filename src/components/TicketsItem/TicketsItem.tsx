import React from 'react';
import s from './TicketsItem.module.scss';
import logo_ticket from './logo_ticket.svg';

const TicketsItem: React.FC = () => {
  return (
    <li className={s.card}>
      <div className={s.header}>
        <div className={s.price}>13 400 Р</div>
        <div className={s.logo}>
          <img src={logo_ticket} alt="logo" />
        </div>
      </div>
      <div className={s.path}>
        <div className={s.data}>
          <div className={s.top}>MOW – HKT</div>
          <div className={s.bot}>10:45 – 08:00</div>
        </div>
        <div className={s.data}>
          <div className={s.top}>В пути</div>
          <div className={s.bot}>21ч 15м</div>
        </div>
        <div className={s.data}>
          <div className={s.top}>2 пересадки</div>
          <div className={s.bot}>HKG, JNB</div>
        </div>
      </div>
      <div className={s.path}>
        <div className={s.data}>
          <div className={s.top}>MOW – HKT</div>
          <div className={s.bot}>10:45 – 08:00</div>
        </div>
        <div className={s.data}>
          <div className={s.top}>В пути</div>
          <div className={s.bot}>21ч 15м</div>
        </div>
        <div className={s.data}>
          <div className={s.top}>2 пересадки</div>
          <div className={s.bot}>HKG, JNB</div>
        </div>
      </div>
    </li>
  );
};

export default TicketsItem;
