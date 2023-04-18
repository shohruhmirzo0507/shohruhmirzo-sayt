import React from 'react'
import "./Navbar.css"
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { NAVBAR_BOTTOM_DATA } from "../../static"

function Navbar() {
    return (
        <>
            <div className='navbar container'>
                <NavLink to={"/"} className="nav__logo">
                    <span><img width={170} src="https://api.logo.com/api/v2/images?logo=logo_279e1a80-8abc-4ce0-a19e-3a0f814663b3&format=webp&margins=0&quality=60&width=500&background=transparent&u=1679896903" alt="" /></span>
                </NavLink>
                <button className='nav__katalog-btn'>
                    <FiMenu />
                    <span>Katalog</span>
                </button>
                <div className="nav__search">
                    <input type="text" placeholder='Qidirish...' />
                    <button>
                        <FiSearch />
                    </button>
                </div>
                <div className="nav__links">
                    <NavLink to={"/"} className="nav__link">
                        <AiOutlineHome />
                        <span>Bosh sahifa</span>
                    </NavLink>
                    <NavLink to={"login"} className="nav__link">
                        <FiUser />
                        <span>Kirish</span>
                    </NavLink>
                    <NavLink to={"wishlist"} className="nav__link liko ">
                        <AiOutlineHeart />
                        <span>Saralangan</span>
                    </NavLink>
                    <NavLink to={"cart"} className="nav__link">
                        <AiOutlineShoppingCart />
                        <span>Savat</span>
                    </NavLink>
                </div>

            </div>
            <div className=" container nav__bottom">
                {
                    NAVBAR_BOTTOM_DATA?.map((item, inx) =>
                        <span key={inx}>{item}</span>
                    )
                }
            </div>
        </>
    )
}

export default Navbar