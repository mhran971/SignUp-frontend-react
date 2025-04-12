import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="content-flex">
        <SideBar />
        <div className="content-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
