import "./Side.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  
} from "react-router-dom";
import ListUser from "./ListUser";
import Login from "../Login/Login";

export default function Sidebar() {
  const Navigate = useNavigate();
  const Nav = () => Navigate("/login");

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="Home">
              <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <div className="sidebarIcon" />
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="users">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                User
              </li>
            </Link>

            <li className="sidebarListItem">
              <div className="sidebarIcon" />
              Budget
            </li>

            <li className="sidebarListItem">
              <div className="sidebarIcon" />
              Status
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Client</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <div className="sidebarIcon" />
              Details
            </li>
            <li className="sidebarListItem">
              <div className="sidebarIcon" />
              Setting
            </li>
          </ul>

          <button onClick={()=>{Navigate('/login')}}>Logout</button>
        </div>
      </div>
    </div>
  );
}
