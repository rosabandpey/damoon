import React, { useState, useEffect } from "react";
import styles from "./style/header.module.scss";
import { menuList } from "./constants";
import logo from "../../../assets/img/Logo-96.png";
import Image from "next/image";
import Link from "next/link";
import CustomModal from "../modal/CustomModal";
import RegisterForm from "../home/RegisterForm";


export default function Header(props) {
  const [menuCat, setMenuCat] = useState(null);
  const [navOpened, setNavOpened] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
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
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.header_wrapper} onClick={dontClose}>
        <section className={styles.header_section}>
          <nav className={styles.container}>
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
              <span className={styles.toggle_btn} onClick={toggleNav}></span>
            </div>
          </nav>
        </section>
      </header>

      {open && (
        <CustomModal open={open} modalToggle={handleClose}>
          <RegisterForm handleClose={handleClose} />
        </CustomModal>
      )}
    </>
  );
}
