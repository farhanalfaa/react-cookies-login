import { Home, Profile, Contact, Login, Product } from "../pages";

const routes = [
  {
    path: "/profile",
    component: Profile,
    isPublic: false,
  },
  {
    path: "/contact",
    component: Contact,
    isPublic: true,
  },
  {
    path: "/home",
    component: Home,
    isPublic: true,
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
  },
  {
    path: "/product",
    component: Product,
    isPublic: false,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
