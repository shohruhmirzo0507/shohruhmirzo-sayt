import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    
    <div className='container footer'>
      <div className="Foot__top">
        <div className="top__cart">
          <h3>Biz haqimizda</h3>
          <p>Topshirish punkitlari</p>
          <p>Vakansiyalar</p>
        </div>
        <div className="top__cart">
          <h3>Foydalanuvchilarga</h3>
          <p>Biz bilan bog'lanish</p>
          <p>Savol-javob</p>
        </div>
        <div className="top__cart">
          <h3>Tadbirkorlarga</h3>
          <p>Uzumda soting</p>
          <p>Sotuvchi kabinetiga kirish</p>
        </div>
        <div className="top__cart">
          <h3>Ilovani yuklab olish</h3>
          <button className='btn'><img width={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1IikYI4pADqY9I0Too5NSDVDdjDnIza1g&usqp=CAU" alt="" /></button>
          <button className='btn'><img width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGctvNjXNWCykjwFwv7h0disX4tYHa2WMFmw&usqp=CAU" alt="" /></button>

          <h4>Uzum ijtimoiy tarmoqlarda</h4>
          <button className='btn'><img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5NjcGBn7emNXVvHgVxK9iDO07OGjdgOQ0g&usqp=CAU" alt="" /></button>
          <button className='btn'><img width={55} src="data:image/png;base64,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" alt="" /></button>
          <button className='btn'><img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzGVVJq3sj8hhrq8RvF9EhKVD6yT85gUVgQ&usqp=CAU" alt="" /></button>
          <button className='btn'><img width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBID9Fih7-sURQoZlBYnPmjiQAvnH0JzLsw&usqp=CAU" alt="" /></button>
        </div>
      </div>
      <hr className='h' />
      <div className="Foot__bottom">
        <p>Maxfiylik kelishuvi Foydalanuvchi kelishuvi</p>
        <p>2023 @ xk MCHJ uzum market  STIR 309376127 Barcha huquqlar himoyalangan</p>
      </div>
    </div>
    
  )
}

export default Footer