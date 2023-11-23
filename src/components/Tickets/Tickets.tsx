import React from 'react';
import s from './Tickets.module.scss';
import TicketsItem from '../TicketsItem/TicketsItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSearchId, fetchTickets } from '../../store/actions/ticketAction';
import Spinner from '../Spinner/Spinner';
import { ITicket } from '../../store/reducers/ticketSlice';

const Tickets: React.FC = () => {
  const [visibleTickets, setVisibleTickets] = React.useState(5);
  const { id, tickets, isLoading } = useAppSelector((state) => state.ticket);
  const tabs = useAppSelector((state) => state.tab.tabs);
  const filters = useAppSelector((state) => state.filter.filters);
  const dispatch = useAppDispatch();

  const sortTickets = (arr: ITicket[]) => {
    const activeTab = tabs.find((item) => item.active);
    const activeFilters = filters.filter((item) => item.active).map((item) => item.name);

    if (arr && activeTab) {
      let copyArr = [...arr];

      if (activeFilters.length === 0) {
        return [];
      } else if (activeFilters.includes('not')) {
        copyArr = copyArr.filter((item) => item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0);
      } else if (activeFilters.includes('one')) {
        copyArr = copyArr.filter((item) => item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1);
      } else if (activeFilters.includes('two')) {
        copyArr = copyArr.filter((item) => item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2);
      } else if (activeFilters.includes('three')) {
        copyArr = copyArr.filter((item) => item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3);
      }

      switch (activeTab.text) {
        case 'Самый дешевый':
          return copyArr.sort((a, b) => a.price - b.price);
        case 'Самый быстрый':
          return copyArr.sort((a, b) => Math.floor(a.segments[0].duration + a.segments[1].duration) - Math.floor(b.segments[0].duration + b.segments[1].duration));
        case 'Оптимальный':
          return copyArr;
        default:
          return [];
      }
    } else {
      return [];
    }
  };

  React.useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTickets(id));
    }
  }, [dispatch, id]);

  return (
    <ul className={s.tickets}>
      {isLoading ? <Spinner /> : <h2 className={s.title}>Общее количество билетов: {tickets.length}</h2>}
      {sortTickets(tickets)
        .slice(0, visibleTickets)
        .map((item, i) => (
          <TicketsItem key={i} price={item.price} carrier={item.carrier} segments={item.segments} />
        ))}
      <button onClick={() => setVisibleTickets((prev) => prev + 5)} className={s.button}>
        Показать еще 5 билетов!
      </button>
    </ul>
  );
};

export default Tickets;
