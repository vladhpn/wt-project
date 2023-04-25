import { BiInjection } from 'react-icons/bi';
import { GiMedicines } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import { MdPets } from 'react-icons/md';

export const Sidebar = [
  {
    id: '1',
    title: 'Інформація',
    path: '/',
    icon: <MdPets />,
  },
  {
    id: '2',
    title: 'Вакцинації',
    path: '/vaccination',
    icon: <BiInjection />,
  },
  {
    id: '3',
    title: 'Лікування',
    path: '/treatment',
    icon: <GiMedicines />,
  },
  {
    id: '4',
    title: 'Календар',
    path: '/calendar',
    icon: <GoCalendar />,
  },
];
