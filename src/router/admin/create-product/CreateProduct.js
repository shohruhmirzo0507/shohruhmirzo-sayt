import React, {useRef} from 'react'
import "../Admin.css"
function CreateProduct() {
    const title = useRef()
    const price = useRef()
    const url = useRef()

    const handleCreate = (e)=>{
        e.preventDefault()
        let newPro = {
            title: title.current.value,
            price: +price.current.value,
            url: url.current.value,
        }
        console.log(newPro);
    }
  return (
    <div className='create__pro'>
        <h2>CreateProduct</h2>
        <form onSubmit={handleCreate} action="">
            <input ref={title} required type="text" placeholder='title'/>
            <input ref={price} required type="number" placeholder='price'/>
            <input ref={url} required type="text" placeholder='url'/>
            <button type='submit'>Create product</button>
        </form>
    </div>
  )
}

export default CreateProduct