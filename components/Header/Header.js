import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import BackDrop from "./BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <ResponsiveNav>
          <nav className={classes.drawer}>
            <ul className={classes.links}>
              <li>
                <Link href="/Courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/Pricing">
                  <a>Pricing</a>
                </Link>
              </li>
            </ul>
          </nav>
        </ResponsiveNav>
      )}
      <header className={classes.mainheader}>
        <div className={classes.th}>
          <Link href="/">
            <a>Thesaurus</a>
          </Link>
        </div>
        <div className={classes.ricon} onClick={openDrawer}>
          <GiHamburgerMenu />
        </div>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/Courses">
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/Pricing">
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
