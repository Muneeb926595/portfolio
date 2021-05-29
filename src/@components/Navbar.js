import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import HomeImg from "assets/navbar/home.svg";
import AboutImg from "assets/navbar/user.svg";
import ServicesImg from "assets/navbar/briefcase.svg";
import PortfolioImg from "assets/navbar/portfolio.svg";
import ClientImg from "assets/navbar/happy.svg";
import ContactImg from "assets/navbar/contact.svg";

const navLinks = [
  {
    id: 1,
    navIcon: HomeImg,
    navLabel: "Home_ICON",
    navTitle: "Home",
    to: "/",
  },
  {
    id: 2,
    navIcon: AboutImg,
    navLabel: "About_ICON",
    navTitle: "About",
    to: "/about",
  },
  {
    id: 3,
    navIcon: ServicesImg,
    navLabel: "Services_ICON",
    navTitle: "Services",
    to: "/services",
  },
  {
    id: 4,
    navIcon: PortfolioImg,
    navLabel: "Portfolio_ICON",
    navTitle: "Portfolio",
    to: "/portfolio",
  },
  {
    id: 5,
    navIcon: ClientImg,
    navLabel: "Client_ICON",
    navTitle: "Client",
    to: "/client",
  },
  {
    id: 6,
    navIcon: ContactImg,
    navLabel: "Contact_ICON",
    navTitle: "Contact",
    to: "/contact",
  },
];

const useStyles = makeStyles({
  container: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)!important",
    zIndex: "999999999999",
    height: "100vh",
    backgroundColor: "#ffffff",
  },
  brandLogoContainer: {
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35ab39",
    marginBottom: "40px",
  },
  brandLogo: {
    fontSize: "44px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 900,
    fontStyle: "normal",
    marginRight: "0px",
    color: "#ffffff",
    textDecoration: "none",
  },
  singelNavitemContainer: {
    width: "100%",
    color: "#d1cdcd",
    borderTop: ".5px solid",
  },
  singelNavitem: {
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#343a40",
    textDecoration: "none",
  },
  activeSingelNavitem: {
    borderRight: "4px solid green",
  },
  navItemContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Segoe UI Symbol",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.brandLogoContainer}>
        <NavLink className={classes.brandLogo} to="/">
          M
        </NavLink>
      </div>

      {navLinks.map((link) => {
        return (
          <div key={link.id} className={classes.singelNavitemContainer}>
            <NavLink
              activeClassName={classes.activeSingelNavitem}
              className={classes.singelNavitem}
              to={link.to}
              exact
            >
              <div className={classes.navItemContent}>
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginBottom: "5px",
                  }}
                  src={link.navIcon}
                  alt={link.navLabel}
                />
                {link.navTitle}
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
