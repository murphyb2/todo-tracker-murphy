import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faSignOutAlt,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ toggled, handleSetToggled }) => {
  const { profile } = useContext(GlobalContext);

  const headerContent = (
    <div className="d-flex flex-column justify-content-around p-3">
      <Link to="/" className="mx-auto">
        <img
          src={profile.image}
          alt={profile.displayName}
          className="img-thumbnail rounded p-0 m-auto"
        />
      </Link>
      <div>
        <h3 className="p-2 text-center">{profile.firstName}</h3>
      </div>
    </div>
  );

  return (
    <ProSidebar toggled={toggled} onToggle={handleSetToggled} breakPoint="md">
      <SidebarHeader>{headerContent}</SidebarHeader>
      <Menu iconShape="round">
        <MenuItem icon={<FontAwesomeIcon icon={faGem} />}>
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
          Add a ToDo
          <Link to="/add" />
        </MenuItem>
        {/* <MenuItem icon={<FontAwesomeIcon icon={faList} />}>
          All ToDos
          <Link to="/todos" />
        </MenuItem> */}
      </Menu>
      <SidebarFooter>
        <Menu iconShape="round">
          <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
            <a href="/auth/logout">Logout</a>
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
