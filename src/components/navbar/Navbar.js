import React, { useState } from 'react'
import "./Navbar.css"
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome, } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { NAVBAR_BOTTOM_DATA } from "../../static"
import { ImCross } from 'react-icons/im'
import { SlEarphones } from 'react-icons/sl'
import { GrFormNext } from 'react-icons/gr'



function Navbar() {

    const [division, setDivision] = useState(false)
    const OKAY = [
        { title: "Elektronika" },
        { title: "Maishiy texnika" },
        { title: "Kiyim" },
        { title: "Poyabzallar" },
        { title: "Aksessuarlar" },
        { title: "Go'zallik" },
        { title: "Solomatlik" },
        { title: "Uy-ro'zg'or buyumlari" },
        { title: "Qurilish va ta'mirlash" },
        { title: "Avtotavarlar" },
        { title: "Bolalar tavarlari" },
        { title: "Xobbi va ijod" },
        { title: "Sport va hordiq" },
        { title: "Oziq-ovqat mahsulotlari" },
        { title: "Konselyariya tovarlari" },
        { title: "Hayvonlar uchun tavarlar" },
        { title: "Kitoblar" },
        { title: "Dacha,bog' va tomorqa" },
    ]

    return (
        <>
            <div className='navbar container'>
                <NavLink to={"/"} className="nav__logo">
                    <span><img width={170} src="https://api.logo.com/api/v2/images?logo=logo_279e1a80-8abc-4ce0-a19e-3a0f814663b3&format=webp&margins=0&quality=60&width=500&background=transparent&u=1679896903" alt="" /></span>
                </NavLink>
                <button onClick={() => setDivision(!division)} className='nav__katalog-btn'>
                    {
                        division ? <ImCross /> : <FiMenu />
                    }

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
            <div className="divcha">
                <div className=" container nav__bottom">
                    {
                        NAVBAR_BOTTOM_DATA?.map((item, inx) =>
                            <span key={inx}>{item}</span>
                        )
                    }

                </div>

                {
                    division ? <div className="katalog__page container">
                        <div className="green">
                            {
                                OKAY?.map((items, inx) =>

                                    <button key={inx} className='gold'> <p> <SlEarphones />  {items.title}</p> <GrFormNext /></button>

                                )
                            }
                        </div>

                        <div className="green1">
                            <div className="music">
                                <h2>Elektronika</h2>
                                <div className="activ">
                                <b>Smartfonlar va Telefonlar</b>
                                <p>Aksessuarlar va ehtiyot qismlar</p>
                                <p>Smartfonlar</p>
                                <p>Knopkali telefonlar</p>
                                <p>Simli telefonlar</p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Kompyuter texnikasi</b>
                                <p>Kompyuter Aksessuarlari</p>
                                <p>Kompyuter tashqi qurilmaari</p>
                                <p>Malumotlarni saqlash</p>
                                <p>Kompyuter texnikalari uchun qismlar </p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Soatlar va elektron budulniklar</b>
                                <p>Elektron budulniklar</p>
                                <p>Proyeksiya soatlari</p>
                                <p>AromaBudulniklar va katrijlar</p>
                                <p>Radio budulniklar</p>
                                </div>
                                <div className="activ">
                                <b>Ofis texnikasi</b>
                                <p>Ofis jihozlari uchun qismlar </p>
                                <p>Ofis jihozlar</p>
                                <p>Aksessuarlar va ofis jihozlari</p>
                                <p>Jihozlar parvarishi</p>
                                <p>Yana 2</p>
                                </div>

                            </div>
                            <div className="music1">
                                
                                <div className="activ">
                                <b>Smartfonlar va Telefonlar</b>
                                <p>Aksessuarlar va ehtiyot qismlar</p>
                                <p>Smartfonlar</p>
                                <p>Knopkali telefonlar</p>
                                <p>Simli telefonlar</p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Kompyuter texnikasi</b>
                                <p>Kompyuter Aksessuarlari</p>
                                <p>Kompyuter tashqi qurilmaari</p>
                                <p>Malumotlarni saqlash</p>
                                <p>Kompyuter texnikalari uchun qismlar </p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Soatlar va elektron budulniklar</b>
                                <p>Elektron budulniklar</p>
                                <p>Proyeksiya soatlari</p>
                                <p>AromaBudulniklar va katrijlar</p>
                                <p>Radio budulniklar</p>
                                </div>
                                <div className="activ">
                                <b>Ofis texnikasi</b>
                                <p>Ofis jihozlari uchun qismlar </p>
                                <p>Ofis jihozlar</p>
                                <p>Aksessuarlar va ofis jihozlari</p>
                                <p>Jihozlar parvarishi</p>
                                <p>Yana 2</p>
                                </div>

                            </div>
                            <div className="music2">
                                
                                <div className="activ">
                                <b>Smartfonlar va Telefonlar</b>
                                <p>Aksessuarlar va ehtiyot qismlar</p>
                                <p>Smartfonlar</p>
                                <p>Knopkali telefonlar</p>
                                <p>Simli telefonlar</p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Kompyuter texnikasi</b>
                                <p>Kompyuter Aksessuarlari</p>
                                <p>Kompyuter tashqi qurilmaari</p>
                                <p>Malumotlarni saqlash</p>
                                <p>Kompyuter texnikalari uchun qismlar </p>
                                <p>Yana 2</p>
                                </div>
                                <div className="activ">
                                <b>Soatlar va elektron budulniklar</b>
                                <p>Elektron budulniklar</p>
                                <p>Proyeksiya soatlari</p>
                                <p>AromaBudulniklar va katrijlar</p>
                                <p>Radio budulniklar</p>
                                </div>
                                <div className="activ">
                                <b>Ofis texnikasi</b>
                                <p>Ofis jihozlari uchun qismlar </p>
                                <p>Ofis jihozlar</p>
                                <p>Aksessuarlar va ofis jihozlari</p>
                                <p>Jihozlar parvarishi</p>
                                <p>Yana 2</p>
                                </div>

                            </div>
                            
                        </div>

                    </div> : ""
                }
            </div>
        </>
    )
}

export default Navbar