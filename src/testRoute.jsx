import { Hello } from "./pages/Hello";
import { Hello2 } from "./pages/Hello2";
import { Routes, Route } from "react-router-dom";

const routes = {
  default: Hello,
  login: {
    index: Hello,
    asan: Hello2,
  },
};

const a = (routes, previousPath = "/") => {
  Object.entries(routes).reduce((acc, [path, route]) => {
    if (path === "default") {
      routes.path = previousPath;
    } else {
      routes.path = `${previousPath}/${path}`.replace(/\/+/g, "/");
      a(route, routes.path);
    }
  }, {});
};

a(routes);

const RoutingLoop = ({ routes, path }) => (
  <Route key={path} element={routes.default || null}>
    {Object.entries(routes).map(([path, route]) => {
      return <RoutingLoop key={path} routes={route} path={path} />;
    })}
  </Route>
);

export const Routing = () => {
  return (
    <Routes>
      <RoutingLoop routes={routes} path="/" />
    </Routes>
  );
};
