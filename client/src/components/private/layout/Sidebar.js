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

const Sidebar = () => {
  const { profile } = useContext(GlobalContext);
  console.log(profile);
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedIcon, setCollapsedIcon] = useState(faChevronLeft);

  const headerContent = collapsed ? (
    <div className="d-flex justify-content-around py-3">
      <FontAwesomeIcon icon={faGem} />
    </div>
  ) : (
    <div>
      <h4 className="p-2 text-center">Welcome {profile.firstName}!</h4>
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
    <ProSidebar collapsed={collapsed}>
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
          Logout
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
