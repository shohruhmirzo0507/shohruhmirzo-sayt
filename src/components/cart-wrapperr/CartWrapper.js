import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckSquareFill } from 'react-icons/bs'
import {useDispatch} from "react-redux"
import {addToCard, decFromCard, removeFromCard}  from "../../context/action/action"

function CartWrapper({cart}) {
    const dispatch = useDispatch()

  return (
    <div className=" container cart">
    {
        <div className="bull">
    
      <h2>Savatingiz, 1 ta mahsulot</h2>
      <br />
      <div className="box">
        <div className="main__cart">
          <div className="top">
            <p><BsCheckSquareFill />  Hammasini yechish</p>
            <p className="look">Yetkazib berishning eng yaqin sanasi: <button>M04 19 (erta)</button>  </p>
          </div>
          <hr className="type" />
    
          {
            cart?.map((item) => <div key={item.id} className="class">
              <img width={90} src={item.url} alt="" />
              <div className="betwen">
                <b>{item.title}</b>
                <p>Sotuvchi: Mobi Land</p>
                <p>Rang: Moviy osmon rangi</p>
              </div>
              <button className="muth">
                <button disabled={item.soni <= 1} onClick={()=> dispatch(decFromCard(item))}  className="muth__btn">-</button>
                <b>{item.soni}</b>
                <button onClick={()=> dispatch(addToCard(item))} className="muth__btn">+</button>
              </button>
              <div className="calcus">
                <button onClick={()=> dispatch(removeFromCard(item))} className="delete"><RiDeleteBin5Fill />  yo'q qilish</button>
                <h3>{item.price * item.soni} so'm</h3>
                <p>{item.price} so'm</p>
                <del>{item.price * 1.2} so'm</del>
              </div>
            </div>
            )}
          <hr className="type" />
    
        </div>
        <div className="right__cart">
          <b>Siz uchun eshikkacha bepul yetkazib berish.</b>
          <p>Tanlovingizga ko'ra tez yetkazib berish</p>
          <hr className="typeing" />
          <h3>Buyurtmangiz</h3>
          {/* <p>Mahsulotlar </p>
          <p>{cart.reduce((a, b)=> a + b.soni, 0)}</p>
            <p>{cart.reduce((a, b)=> a.soni * b.price, 0)}</p> */}
          <input type="text" placeholder="name..." />
          <input type="number" placeholder="+998 00 000 00 00" />
          <input type="password" placeholder="Adress..."   />
          <button className="shop">Rasmiylashtirishga o'tish</button>
        </div>
      </div>
      </div>
    
     
    }
         
        </div>
  )
}

export default CartWrapper