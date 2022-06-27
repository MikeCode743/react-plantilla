import { Favoritos } from "../../views/layout/Favoritos";

const routesLayout = {
  title: "Favoritos",
  icon: "favorites",
  // components: () => import('../views/layout/Favoritos'),
  children: [
    {
      title: "Favoritos 1",
      icon: "favorites",
      path: "/favoritos/",
    },
  ],
};

export default routesLayout;