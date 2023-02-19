import React, { useState } from "react";

import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import user from "../../images/user.svg";
import burger from "../../images/burger.svg"
import closeMenu from "../../images/closeMenu.svg"

import "./Header.css";

function Header () {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="header--container">
                <a href="/">
                    <img src={logo} alt="Svizha" />
                </a>

                <nav>
                    <button>
                        <img src={cart} alt="cart" />
                    </button>

                    <button>
                        <img src={user} alt="user" />
                    </button>

                    <button onClick={handleClick} className="burger">
                        <img src={showMenu ? closeMenu : burger} alt="menu" />
                    </button>

                    {showMenu && (
                    <div className={`dropdown-menu`}>
                        <div className="header--container">
                            <ul>
                                <li><a href="/menu">Страви</a></li>
                                <li><a href="about-us">Про нас</a></li>
                                <li><a href="buy-us">Де купити</a></li>
                                <li><a href="for-partners">Партнерам</a></li>
                                <li><a href="login">Увійти</a></li>
                            </ul>
                        </div>
                    </div>
                    )}
                </nav>
                
            </div>

        </header>
    )
};

export default Header;