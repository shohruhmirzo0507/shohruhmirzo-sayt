import React from 'react'
import "./Products.css"
// import { DATA } from "../../static"
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromHeart} from "../../context/action/action"


function Products({ data }) {
    const dispatch = useDispatch()
    const heart = useSelector(s => s.heart)
    return (
        <div className='container products'>
            {
                data?.map((item) => <div key={item.id} className="pro__card">
                    <div className="pro__image">
                        <Link to={`product/${item.id}`} state={item}>
                            <img src={item.url} alt="" />
                        </Link>
                        
                        {
                            heart?.some( i => i.id === item.id ) ?
                                <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} />
                                 :
                                <AiOutlineHeart onClick={() => dispatch(addToCart(item))} />
                        }


                    </div>
                    <div className="pro__body">
                        <p className='pro__card-title'>{item.title.length > 55 ? item.title.slice(0, 55) + "..." : item.title}</p>
                        <span className='pro__card-monthly'>{Math.round(item.price * 1.5 / 12)} so'm/oyiga</span>
                        <div className="pro__card-price">
                            <div>
                                <del>{item.price * 1.2}</del>
                                <p>{item.price} so'm</p>
                            </div>
                            <div className='pro__card-shopping'>
                                <AiOutlineShoppingCart />
                            </div>
                        </div>
                    </div>
                </div>)
            }
            

        </div>
    )
}

export default Products