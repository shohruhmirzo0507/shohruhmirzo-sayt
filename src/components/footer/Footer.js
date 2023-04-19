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
        <div className="top__cart1">
          <h3>Ilovani yuklab olish</h3>
          <button className='btn'><img width={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1IikYI4pADqY9I0Too5NSDVDdjDnIza1g&usqp=CAU" alt="" /></button>
          <button className='btn'><img width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGctvNjXNWCykjwFwv7h0disX4tYHa2WMFmw&usqp=CAU" alt="" /></button>

          <h4>Uzum ijtimoiy tarmoqlarda</h4>
         
          <button className='btn'><img width={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSiRW3wHiFStrZKimAqni2MRmCACmAS_ncw&usqp=CAU" alt="" /></button>
       

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