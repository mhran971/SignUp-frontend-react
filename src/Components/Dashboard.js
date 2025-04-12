import TopBar from "./TopBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="content-flex">
        <SideBar></SideBar>
        <h1>helpppp</h1>
      </div>
    </div>
  );
}
