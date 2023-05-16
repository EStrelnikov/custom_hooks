import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/router_components/pages/loading";

const RouterApp = lazy(() =>
  import("./components/router_components/routerApp")
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterApp />
    </Suspense>
  );
}

export default App;
