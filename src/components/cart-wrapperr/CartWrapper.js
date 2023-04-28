import React, {useState, useRef} from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckSquareFill } from 'react-icons/bs'
import {useDispatch} from "react-redux"
import {addToCard, decFromCard, removeFromCard,deleteAllCart }  from "../../context/action/action"


const TOKEN = "6235987517:AAEAmZDiNKgm8m7BoeRCpHvTnyAwOeryLXk"
const CHAT_ID = "5684827504"

   
// https://api.telegram.org/bot6235987517:AAEAmZDiNKgm8m7BoeRCpHvTnyAwOeryLXk/getUpdates
// https://api.telegram.org/bot[bot_token]/sendMessage?chat_id=[chat_id]


function CartWrapper({cart}) {
    const dispatch = useDispatch()

    // controlled form | component
    const [name, setName] = useState("")
    // uncontrolled form | component

const tel = useRef()
const address = useRef()


const handleSend = (e)=>{
  e.preventDefault()
  let text ="Buyurtma %0A%0A"
  text += `Ism: <b>${name}</b> %0A`
  text += `Tel: ${tel.current.value} %0A`
  text += `Manzil: ${address.current.value} %0A%0A`

cart.forEach((i)=>{
  text += `Nomi: ${i.title}%0A`
  text += `Soni: ${i.soni}%0A`
  text += `Narxi: ${i.price}%0A%0A`
})

text += `<b>Jami summa: ${cart?.reduce((a,b)=> a + (b.soni*b.price), 0)} so'm</b>`

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
  const api = new XMLHttpRequest()
  api.open("GET", url, true)
  api.send()

setName("")
tel.current.value =""
address.current.value =""
dispatch(deleteAllCart())

}


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
              <div className="muth">
                <button disabled={item.soni <= 1} onClick={()=> dispatch(decFromCard(item))}  className="muth__btn">-</button>
                <b>{item.soni}</b>
                <button onClick={()=> dispatch(addToCard(item))} className="muth__btn">+</button>
              </div>
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
        <form onSubmit={handleSend} className="right__cart">
          <b>Siz uchun eshikkacha bepul yetkazib berish.</b>
          <p>Tanlovingizga ko'ra tez yetkazib berish</p>
          <hr className="typeing" />
          <h3>Buyurtmangiz</h3>
          {/* <p>Mahsulotlar </p>
          <p>{cart.reduce((a, b)=> a + b.soni, 0)}</p>
            <p>{cart.reduce((a, b)=> a.soni * b.price, 0)}</p> */}
          <input required ref={tel} type="number" placeholder="+998 00 000 00 00" />
          <input required ref={address} type="password" placeholder="Adress..."   />
          <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name..." />
          <button  className="shop">Rasmiylashtirishga o'tish</button>
        </form>
      </div>
      </div>
    
     
    }
         
        </div>
  )
}

export default CartWrapper