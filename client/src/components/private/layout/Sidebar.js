import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGem,
  faTimes,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedIcon, setCollapsedIcon] = useState(faChevronLeft);
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
      <Menu iconShape="square">
        <MenuItem
          onClick={handleSetCollapsed}
          icon={<FontAwesomeIcon className="mx-auto" icon={collapsedIcon} />}
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
