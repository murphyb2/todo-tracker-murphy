import React, { useState, useContext } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ toggled, handleSetToggled }) => {
  const { profile } = useContext(GlobalContext);
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedIcon, setCollapsedIcon] = useState(faChevronRight);

  const headerContent = (
    <div className="d-flex justify-content-around p-3">
      {!collapsed && (
        <div>
          <h4 className="p-2 text-center">Welcome {profile.firstName}!</h4>
        </div>
      )}
      <img
        src={profile.image}
        alt={profile.displayName}
        className="img-thumbnail rounded p-0"
      />
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
      collapsed={collapsed}
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
        <MenuItem icon={<FontAwesomeIcon icon={faGem} />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart} />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
          <a href="/auth/logout">Logout</a>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
