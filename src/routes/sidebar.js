/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.jsx`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.jsx
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/orders",
    icon: "CartIcon",
    name: "Orders",
  },
  {
    icon: "TruckIcon",
    name: "Products",
    routes: [
      {
        path: "/app/products",
        name: "All Products",
      },
      {
        path: "/app/product/add",
        name: "Add Product",
      },
    ],
  },
  {
    path: "/app/customers",
    icon: "GroupIcon",
    name: "Customers",
  },
  {
    path: "/app/chats",
    icon: "ChatIcon",
    name: "Chats",
  },
  {
    path: "/app/profile",
    icon: "UserIcon",
    name: "Profile",
  },
  {
    path: "/app/settings",
    icon: "OutlineCogIcon",
    name: "Settings",
  },
  {
    path: "/app/logout",
    icon: "OutlineLogoutIcon",
    name: "Logout",
  },
];

export default routes;
