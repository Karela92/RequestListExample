import {
  faCog, faUsers, faFileAlt, faBook, faHandshake, faChartLine
} from '@fortawesome/free-solid-svg-icons'

export const navItems = [
  {
    name: 'База знаний',
    routePath: 'knowledge',
    icon: faBook
  },
  {
    name: 'Заявки',
    routePath: 'request',
    icon: faFileAlt
  },
  {
    name: 'Сотрудники',
    routePath: 'employers',
    icon: faUsers
  },
  {
    name: 'Клиенты',
    routePath: 'clients',
    icon: faHandshake
  },
  {
    name: 'Активы',
    routePath: 'actives',
    icon: faChartLine
  },
  {
    name: 'Настройки',
    routePath: 'settings',
    icon: faCog
  }
];