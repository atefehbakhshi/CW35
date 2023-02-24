import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#6200ea] py-2 px-1 flex justify-between items-center">
      <div className="flex gap-2">
        <Icon icon="ic:outline-format-list-numbered" color="white" width="24" />
        <p className="text-base text-white">My To DO Tasks</p>
      </div>
      <div className="flex gap-2 items-center">
        <input type="text" placeholder="Search" className="px-2 rounded" />
        <Icon
          icon="material-symbols:filter-alt-sharp"
          color="white"
          width="24"
        />
        <Link to="/add">
          <span className="bg-white text-center py-1 px-2 rounded">+</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
