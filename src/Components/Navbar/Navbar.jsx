import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeImg from '../../assets/img/icons8_home.svg';
import AboutImg from '../../assets/img/icons8_user.svg';
import ServicesImg from '../../assets/img/icons8_briefcase.svg';
import PortfolioImg from '../../assets/img/icons8_portfolio.svg';
import ClientImg from '../../assets/img/icons8_happy.svg';
import ContactImg from '../../assets/img/icons8_contact_1.svg';


const navLinks = [
    {
        id: 1,
        navIcon: HomeImg,
        navLabel: "Home_ICON",
        navTitle: "Home",
        to: "/"
    },
    {
        id: 2,
        navIcon: AboutImg,
        navLabel: "About_ICON",
        navTitle: "About",
        to: "/about"
    },
    {
        id: 3,
        navIcon: ServicesImg,
        navLabel: "Services_ICON",
        navTitle: "Services",
        to: "/services"
    },
    {
        id: 4,
        navIcon: PortfolioImg,
        navLabel: "Portfolio_ICON",
        navTitle: "Portfolio",
        to: "/portfolio"
    },
    {
        id: 5,
        navIcon: ClientImg,
        navLabel: "Client_ICON",
        navTitle: "Client",
        to: "/client"
    },
    {
        id: 6,
        navIcon: ContactImg,
        navLabel: "Contact_ICON",
        navTitle: "Contact",
        to: "/contact"
    }
]

function Navbar() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-white shadow off-canvas" data-right-drawer="0" data-open-drawer="1" style={{ width: '90px', paddingTop: 0 }}>
            <div className="container-fluid flex-column">
                <div className="d-flex justify-content-between brand-line"
                    style={{ width: '124px', marginLeft: '-16px' }}>
                    <NavLink className="navbar-brand text-center text-white d-md-flex justify-content-md-center align-items-md-center"
                        to="/"
                        style={{ backgroundColor: '#35ab39', width: '90px', height: '90px', fontSize: '44px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontStyle: 'normal', marginRight: '0px' }}>M
                        </NavLink>
                </div>
                <ul className="nav navbar-nav text-center d-flex flex-column flex-column drawer-menu"
                    style={{ width: '90px', marginTop: '40px', marginLeft: '-50px' }}>
                    {
                        navLinks.map((link) => {
                            return (
                                <li key={link.id} className="nav-item my-nav-item" role="presentation">
                                    <NavLink activeClassName="myActiveLink" className="nav-link text-dark d-md-flex justify-content-md-center align-items-md-center"
                                        to={link.to} exact style={{ width: '90px', height: '72px' }}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{ width: '20px', height: '20px', marginBottom: '5px' }} src={link.navIcon}
                                                alt={link.navLabel} />
                                            {link.navTitle}
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;