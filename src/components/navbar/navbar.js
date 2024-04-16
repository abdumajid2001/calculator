import React from 'react';
import {getLanguage, setLanguage} from "../../helper/persistance-storege";
import './navbar.css'
import {Link} from "react-router-dom";
import i18next from "i18next";

const Navbar = () => {
    const lang = getLanguage('lang')

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top justify-content-between"
             style={{height: "76px"}}>
            <div>
                <Link to="/"
                      className="home-link nuxt-link-exact-active nuxt-link-active justify-content-center d-flex align-items-center"
                      aria-current="page">
                    <span className={"mx-1"}>
                            <img className={"mx-4"} src={'logo2.png'} alt="logo" width={300} height={60}/>
                    </span>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                <ul className={"navbar-nav nav_ul align-items-center"} style={{gap: "20px"}}>
                    <li className="nav-item">
                        <Link to={"/"} className={"nav-bottom-list__link"}>
                            {i18next.t("calculator")}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/require"} className={"nav-bottom-list__link"}>
                            {i18next.t("requires")}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mixture"} className={"nav-bottom-list__link"}>
                            {i18next.t("mixture")}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/hardness"} className={"nav-bottom-list__link"}>
                            {i18next.t("hardness")}
                        </Link>
                    </li>
                </ul>
                <div className="navbar-nav nav_ul align-items-center">
                    <select onChange={changeLanguage} value={lang} className={"form-select lang-box"}>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;