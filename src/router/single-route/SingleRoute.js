import React from 'react'
import { useLocation } from 'react-router-dom'
import "./SingleRoute.css"
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { HiFire } from 'react-icons/hi';

function SingleRoute() {
  const data = useLocation().state
  console.log(data);


  return (
    <div className='container single'>
      <div className="route">
        <img src={data?.url} alt="" />
      </div>
      <div className="route1">
        <div className="top__inside">
          <p className='star'>
            <AiFillStar /> 4.9  (413 baho) Ko'proq 15000 buyurtma
          </p>
          <p className='star__he'><AiOutlineHeart /> Istaklarga</p>
        </div>
        <div className="name">
          <h2>{data?.title}</h2>
          <p>Sotuvchi: Tide</p>
          <p>Yetkazib berish: 1, kun bepul</p>
          <hr />
          <p>Miqdor:</p>
          <div className="div__kg">

            <button className="pop">
              <button className="pop__item">-</button>
              <b>1</b>
              <button className="pop__item">+</button>
            </button>
            <p className='fire'><HiFire /> Bor-yo'g'i 2 dona qoldi.</p>
          </div>

          <p>Narx: </p>
          <div className="div__kg1">

            <h3>{data?.price} so'm</h3>
            <del>{data?.price * 1.2} so'm</del>
          </div>
          <button className='twelve'> <b>Oyiga {Math.round((data?.price * 1.5) / 12)} so'mdan</b>  muddatli to'lov</button>
          <br />
          <button className='twelve__pikko'><b>Savatga qo'shish</b></button>
          <button className='twelve__pikko1'><b>Tugmani 1 bosishda xarid qilish</b></button>
        </div>
      </div>


    </div>
  )
}

export default SingleRoute