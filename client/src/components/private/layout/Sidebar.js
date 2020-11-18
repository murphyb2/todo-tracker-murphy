import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGem,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ toggled, handleSetToggled }) => {
  const { profile } = useContext(GlobalContext);
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedIcon, setCollapsedIcon] = useState(faChevronRight);

  const headerContent = (
    <div className="d-flex flex-column justify-content-around p-3">
      <img
        src={profile.image}
        alt={profile.displayName}
        className="img-thumbnail rounded p-0 m-auto"
      />
      {!collapsed && (
        <div>
          <h4 className="p-2 text-center">Welcome {profile.firstName}!</h4>
        </div>
      )}
    </div>
  );

  const handleSetCollapsed = () => {
    if (collapsed) {
      setCollapsedIcon(faChevronLeft);
      setCollapsed(false);
    } else {
      setCollapsedIcon(faChevronRight);
      setCollapsed(true);
    }
  };

  return (
    <ProSidebar
      // collapsed={collapsed}
      toggled={toggled}
      onToggle={handleSetToggled}
      breakPoint="md"
    >
      <SidebarHeader>{headerContent}</SidebarHeader>
      <Menu iconShape="square">
        <MenuItem
          onClick={handleSetCollapsed}
          icon={<FontAwesomeIcon icon={collapsedIcon} />}
        >
          Collapse
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faGem} />}>
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
          Add a ToDo
          <Link to="/add" />
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faList} />}>
          All ToDos
          <Link to="/todos" />
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
          <a href="/auth/logout">Logout</a>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
