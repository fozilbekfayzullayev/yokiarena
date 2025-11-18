import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import Welcome from "./pages/Welcome";
const BattleArena = lazy(() => import("./pages/BattleArena"));

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/battle", element: <BattleArena /> },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
