import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));
const Emails = lazy(() => import("../components/Emails"));
const ViewEmail = lazy(()=> import("../components/ViewEmail"));

const routes = {
  main: {
    path: '/',
    element: MainPage
  }, 
  emails: {
    path: '/emails',
    element: Emails
  },
  view: {
    path: '/view',
    element: ViewEmail
  },
  invalid: {
    path: '/*',
    element: Emails
  },
}

export default routes;
