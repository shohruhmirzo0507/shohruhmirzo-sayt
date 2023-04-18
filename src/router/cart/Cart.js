import "./Cart.css"
import React from 'react'
import Empty from '../../components/empty/Empty'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckSquareFill } from 'react-icons/bs'

function Cart() {
  return (
    <div className=" container cart">

      {/* <Empty 
        url="https://uzum.uz/static/img/shopocat.8cee444.png"
        title="Savatda hozircha mahsulot yoq"
        desc="Bosh sahifadagi toplamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping" /> */}

      <h2>Savatingiz, 1 ta mahsulot</h2>
<br />
      <div className="box">
        <div className="main__cart">
        <div className="top">
          <p><BsCheckSquareFill/>  Hammasini yechish</p>
          <p className="look">Yetkazib berishning eng yaqin sanasi: <button>M04 19 (erta)</button>  </p>
        </div>
          <hr className="type" />
          <div className="class">
            <img width={90} src="https://images.uzum.uz/cft1d0ng49devoa955hg/original.jpg" alt="" />
            <div className="betwen">
              <b>Smartfon Samsung Galaxy A13 3/32 GB Black</b>
              <p>Sotuvchi: Mobi Land</p>
              <p>Rang: Moviy osmon rangi</p>
            </div>
            <button className="muth">
              <button className="muth__btn">-</button>
              <b>1</b>
              <button className="muth__btn">+</button>
            </button>
            <div className="calcus">
              <button className="delete"><RiDeleteBin5Fill />  yo'q qilish</button>
              <h3>1 851 000 so'm</h3>
              <del>1 944 000</del>
            </div>
          </div>
          <hr className="type" />
        </div>
        <div className="right__cart">
          <b>Siz uchun eshikkacha bepul yetkazib berish.</b>
          <p>Tanlovingizga ko'ra tez yetkazib berish</p>
          <hr className="typeing" />
          <h3>Malumotlaringizni yozing</h3>
          <input type="text" placeholder="name..." />
          <input type="number" placeholder="+998 00 000 00 00" />
          <input type="password" placeholder="Adress..." />
          <button className="shop">Rasmiylashtirishga o'tish</button>
        </div>
      </div>



    </div>
  )
}

export default Cart