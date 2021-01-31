import React from "react";

const Header = () => {
    return (
        <header className="">
            <div className="header-innr">
                <div className="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
                    <span></span></div>
                <div id="logo">
                    <a href="homepage.html"><img src="assets/images/logo.png" alt="logo"/></a>
                </div>
                <div className="head_user">
                    <a href="homepage.html" className="opts_icon_link uk-visible@s"> Home </a>
                    <a href="timeline.html"> Dennis Han </a>
                    <a className="opts_account" href="#" aria-expanded="false"> <img src="assets/images/avatars/avatar-2.jpg" alt="avatar"/></a>
                </div>
            </div>
    </header>);
};

export default Header;
