import Form from '../pages/Form';
import StoreProducts from '../pages/StoreProducts';
const coreRoutes = [
  {
    path: '/form',
    title: 'Form',
    component: Form,
  },
  {
    path: '/store-products',
    title: 'Store products',
    component: StoreProducts,
  },
];

const routes = [...coreRoutes];
export default routes;
