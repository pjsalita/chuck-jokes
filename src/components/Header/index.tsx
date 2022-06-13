import clsx from "clsx";
import { useState } from "react";
import { FC, memo } from "react";
import { FaBars, FaCaretDown, FaUser } from "react-icons/fa";
import "./styles.scss";

export const Header: FC = memo(() => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMainDropdown, setShowMainDropdown] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        <button className="toggle-menu" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </button>
        <ul className={clsx("menu", { show: showMenu })}>
          <li>So Funktioniert's</li>
          <li>Sonderangebote</li>
          <li
            className="dropdown"
            onClick={() => setShowMainDropdown(!showMainDropdown)}
          >
            <FaUser /> <span>Mein Bereich</span> <FaCaretDown />
            <ul className={clsx({ show: showMainDropdown })}>
              <li>My published jokes</li>
              <li>My saved jokes</li>
              <li>Account information</li>
              <li>Publish new joke</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
});
