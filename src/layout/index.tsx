import { Outlet } from "react-router-dom";
import { Header } from "../pages/components/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}