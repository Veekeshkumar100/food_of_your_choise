import React, { useEffect, useState } from 'react'
import "./Add.css"
import { assets } from '../../../assets/assets'

const Add = () => {
    const [image, setImage] =useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        categary:"",
        price:""
    });





    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("image", image);
    //     formData.append("name", data.name);
    //     formData.append("description", data.description);
    //     formData.append("categary", data.categary);
    //     formData.append("price", data.price);
    //     console.log(formData.entries());
    // }
    const handleInaputCange=(e)=>{
        const {name,value}=e.target;
        setData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
useEffect(()=>{
    console.log(data)

},[data])

  return (
    <div className='add'>
        <form action="" className='flex-col'>
            <div className='upload-image flex-col'>
                <p>Upload Image</p>
                <label htmlFor="file">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="file" hidden  required/>
            </div>
            <div className='product-name '>
                <p>Product Name</p>
                <input onChange={handleInaputCange} type="text" name="name" placeholder='Product Name' required/>
            </div>
            <div className='product-description'>
                <p>Product Description</p>
                <textarea  onChange={handleInaputCange} name="description"   rows="10" placeholder='Product Description' required></textarea>
            </div>
            <div className='product-categary-price flex-row'>
                <div className='product-categary'>
                    <p>Product Categary</p>
                    <select onChange={handleInaputCange} name="categary" id="categary" required>
                        <option value="">Select Category</option>
                        <option value="Salad">Salad</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodle">Noodle</option>
                    </select>
                </div>
                <div className='product-price'>
                    <p>Product Price</p>
                    <input onChange={handleInaputCange} type="number" name="price" placeholder='Product Price' required/>
                </div>
            </div>
            <button type="submit">Add </button>
        </form>
       
    </div>
  )
}

export default Add
