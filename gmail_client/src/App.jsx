import { Suspense,lazy } from "react";
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider, Navigate} from "react-router-dom";
import routes from "./routes/routes";
const ErrorComponent = lazy(()=>import("./components/common/ErrorComponent.jsx"));
import SuspenseLoader from "./components/common/SuspenseLoader.jsx";
import DataProvider from './context/DataProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element = {<Navigate to={`${routes.main.path}/inbox`} />} />
      <Route path = {routes.main.path} element={<routes.main.element />}>
        <Route path = {`${routes.emails.path}/:type`} element = {<routes.emails.element />} errorElement ={<ErrorComponent />}/>
        <Route path = {routes.view.path} element={<routes.view.element />} errorElement = {<ErrorComponent />}/>
      </Route>
      
      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />}/>
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </Suspense>
  );
}

export default App;




