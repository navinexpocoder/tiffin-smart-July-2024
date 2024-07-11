import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Root, RootLayout, LogIn, SignUp } from "../Pages/index.js";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route index element={<Root />} />
      <Route element={<SignUp />} path="/register" />
      <Route element={<LogIn />} path="/login" />
    </Route>
  )
);
