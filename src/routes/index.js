import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));
const Orders = lazy(() => import("../pages/Orders.jsx"));
const ProductsAll = lazy(() => import("../pages/ProductsAll.jsx"));
const SingleProduct = lazy(() => import("../pages/SingleProduct.jsx"));
const AddProduct = lazy(() => import("../pages/AddProduct.jsx"));
const Customers = lazy(() => import("../pages/Customers.jsx"));
const Chats = lazy(() => import("../pages/Chats.jsx"));
const Profile = lazy(() => import("../pages/Profile.jsx"));
const Settings = lazy(() => import("../pages/Settings.jsx"));
const Page404 = lazy(() => import("../pages/404.jsx"));
const Blank = lazy(() => import("../pages/Blank.jsx"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/all-products",
    component: ProductsAll,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/product/:id",
    component: SingleProduct,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/chats",
    component: Chats,
  },
  {
    path: "/manage-profile",
    component: Profile,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
