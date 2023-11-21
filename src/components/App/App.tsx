import React from 'react';
import s from './App.module.scss';
import logo_main from './logo_main.svg';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';
import Tickets from '../Tickets/Tickets';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <div className={s.logo}>
        <img src={logo_main} alt="logo" />
      </div>
      <div className={s.content}>
        <Filter />
        <div className={s.contentTickets}>
          <Tabs />
          <Tickets />
          <div className={s.button}>button</div>
        </div>
      </div>
    </div>
  );
};

export default App;
