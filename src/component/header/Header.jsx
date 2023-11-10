import React, { useState, useEffect } from "react";
import styles from "./style/header.module.scss";
import { menuList } from "./constants";
import logo from "../../../assets/img/Logo-64.png";
import avatar from "../../../assets/img/icons8-user-64.png";
import Image from "next/image";
import Link from "next/link";
import CustomModal from "../modal/CustomModal";
import RegisterForm from "../home/RegisterForm";
import Login from "../home/Login";
import MobileHeader from "./mobileHeader";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header(props) {
  const [menuCat, setMenuCat] = useState(null);
  const [navOpened, setNavOpened] = useState(false);
  const [openRegisterPage, setOpenRegisterPage] = useState(false);
  const [openLoginPage, setOpenLoginPage] = useState(false);

  const handleCloseRegister = () => setOpenRegisterPage(false);

  const handleCloseLogin = () => setOpenLoginPage(false);
  useEffect(() => {
    // add when mounted
    document.addEventListener("click", closeMenu); // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const openMenu = (type) => {
    setMenuCat(type);
  };

  const closeMenu = () => {
    setMenuCat(null);
  };

  const dontClose = (e) => {
    e.stopPropagation();
  };

  const toggleNav = () => {
    if (navOpened) {
      closeMenu();
    }
    setNavOpened(!navOpened);
  };

  const navClick = (isSubmenu) => {
    closeMenu();
    setNavOpened(false);
  };

  const handleRegister = () => {
    setOpenRegisterPage(!openRegisterPage);
  };

  const handleLogin = () => {
    setOpenLoginPage(!openLoginPage);
  };

  return (
    <>
      {/* <header className={styles.header_wrapper} onClick={dontClose}>
        <section className={styles.header_section}>
          <nav className={styles.desktop_header}>
            <ul
              className={styles.header_nav_list + (navOpened ? "opened" : "")}
            >
              <li className={[styles.nav_item, styles.logo_item].join(" ")}>
                <Link
                  href="/"
                  className={[styles.nav_link, styles.text_info].join(" ")}
                  onClick={navClick}
                >
                  <Image src={logo} alt="آتیه" />
                </Link>
              </li>
              {menuList.map((menu, i) => (
                <li
                  key={i}
                  className={[
                    styles.nav_item,
                    styles.text_info +
                      (menuCat === menu?.id ? " active_link" : ""),
                  ].join(" ")}
                >
                  <span
                    className={[styles.nav_link, styles.text_info].join(" ")}
                    onClick={() => openMenu(menu?.id)}
                  >
                    <Link href={menu.link} onClick={navClick}>
                      {menu?.title}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.left_side}>
              <a
                className={[
                  styles.btn,
                  styles.btn_pill,
                  styles.btn_danger,
                ].join(" ")}
                onClick={handleRegister}
              >
                ثبت نام
              </a>

              <a
                className={[
                  styles.btn,
                  styles.btn_pill,
                  styles.btn_danger,
                  styles.btn_login,
                ].join(" ")}
                onClick={handleLogin}
              >
                ورود
              </a>
              <span className={styles.toggle_btn} onClick={toggleNav}></span>
            </div>
          </nav>
        </section>

     
       
 
     
    
      </header> */}

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="d-flex flex-row justify-content-between"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">صفحه اصلی</Nav.Link>
            <Nav.Link href="#pricing">مقالات آموزشی</Nav.Link>

            <Nav.Link href="#pricing"> درباره ما</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">
           Another action
         </NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">
           Separated link
         </NavDropdown.Item>
       </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/home" className={styles.logo_item}>
          <Image
            src={logo}
            alt=""
            width="64"
            height="64"
            className={styles.logo_item}
          />
        </Navbar.Brand>

        <Image
          src={avatar}
          alt=""
          width="64"
          height="64"
          className={styles.logo_item}
        />
      </Navbar>

      {openRegisterPage && (
        <CustomModal
          open={openRegisterPage}
          modalToggle={handleCloseRegister}
          modalTile="ثبت نام کاربر"
        >
          <RegisterForm handleClose={handleCloseRegister} />
        </CustomModal>
      )}

      {openLoginPage && (
        <CustomModal
          open={openLoginPage}
          modalToggle={handleCloseLogin}
          modalTile="ورود"
          size="sm"
        >
          <Login handleClose={handleCloseLogin} />
        </CustomModal>
      )}
    </>
  );
}
