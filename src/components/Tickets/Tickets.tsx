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

    const activeFilters: Record<string, boolean> = {};
    filters.forEach((item) => {
      activeFilters[item.name] = item.active;
    });

    if (arr && activeTab) {
      const filteredArr = arr.filter((item) => {
        if (Object.values(activeFilters).every((filter) => !filter)) {
        }

        if (activeFilters['not'] && item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
          return true;
        }
        if (activeFilters['one'] && item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1) {
          return true;
        }
        if (activeFilters['two'] && item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2) {
          return true;
        }
        if (activeFilters['three'] && item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3) {
          return true;
        }

        return false;
      });

      switch (activeTab.text) {
        case 'Самый дешевый':
          return filteredArr.sort((a, b) => a.price - b.price);
        case 'Самый быстрый':
          return filteredArr.sort((a, b) => Math.floor(a.segments[0].duration + a.segments[1].duration) - Math.floor(b.segments[0].duration + b.segments[1].duration));
        case 'Оптимальный':
          return filteredArr;
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
