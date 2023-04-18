import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className='container login'>
         <div className="login_box">
         <h1 className='login_text'>Telefon raqamini kiriting</h1>
                    <p className='login_title'>Tasdiqlash kodini SMS orqali yuboramiz</p>
                    <input type="number" placeholder='+998 00 000 00 00'/>
                    <br />
                    <button >Ro'yhatdan o'tish</button>
                    <br />
                    <a className='login_password_title' href="#">Parol bilan kirish</a>
                    <br />
                    <p className='login_info'>Avtotizatsiyadan o'tish orqali siz <a href="#">shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</a></p>
         </div>
    </div>
  )
}

export default Login
