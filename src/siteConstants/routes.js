import HomeListContainer from '../containers/HomeList/HomeListContainer';
import RequestListContainer from '../containers/RequestList/RequestListContainer';
import KnowledgesListContainer from '../containers/KnowledgesList/KnowledgesListContainer';
import ClientsContainer from '../containers/ClientsList/ClientsContainer';
import ActivesListContainer from '../containers/ActivesList/ActivesListContainer';
import SettingsListContainer from '../containers/SettingsList/SettingsListContainer';
import EmployersListContainer from '../containers/EmployersList/EmployersListContainer';

const routes = [
  {
    path: '/',
    component: HomeListContainer,
    exact: true
  },
  {
    path: '/request',
    component: RequestListContainer
  },
  {
    path: '/knowledge',
    component: KnowledgesListContainer
  },
  {
    path: '/clients',
    component: ClientsContainer
  },
  {
    path: '/actives',
    component: ActivesListContainer
  },
  {
    path: '/settings',
    component: SettingsListContainer
  },
  {
    path: '/employers',
    component: EmployersListContainer
  },
];

export default routes;