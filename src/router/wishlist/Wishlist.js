import React from 'react'
import Empty from '../../components/empty/Empty'
import {useSelector} from "react-redux"
import Products from '../../components/products/Products';

function Wishlist() {
  const data = useSelector(s => s.heart)
  console.log(data);
  return (
    <div>
      {
        data.length ? <Products data={data}/> :

        <Empty 
        url="https://uzum.uz/static/img/hearts.cf414be.png"
        title="Sevimlilar ro'yhati bo'sh"
        desc="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi" />
      }
        

    </div>
  )
}

export default Wishlist