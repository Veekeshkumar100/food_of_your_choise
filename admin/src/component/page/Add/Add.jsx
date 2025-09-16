import "./Add.css";
import { assets } from "../../../assets/assets";
import {  useState } from "react";
import { AddData } from "../../../api/api";
import { toast } from "react-toastify";

const Add = () => {
  const url="http://localhost:5000";
  const [image, setImage] = useState(false);
 
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });




  
  //FormData is a JavaScript object that allows you to construct key-value pairs representing form fields and their values. It is particularly useful for handling file uploads or sending data via fetch or axios.

       const handleFormSubmit= async(e)=>{
          e.preventDefault();
    const formData=new FormData();
     if(!image){
      return 
    }
    formData.append("image",image);
       formData.append("name",data.name);
      formData.append("description",data.description);
      formData.append("category",data.category);
      formData.append("price",data.price);
      console.log(formData);

         const res =await AddData(formData);
         console.log(res);

      // console.log(Object.fromEntries(formData.entries()));
    
        if(res.data.statusCode===201){
          setData({
    name: "",
    description: "",
    category: "",
    price: "",
  })
       setImage(false)
          toast.success(res.data.message);
        }else{
          toast.error(res.data.message);
        }
       }

  const handleInaputCange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };




  return (
    <div className="add">
      <form action="" className="flex-col" onSubmit={handleFormSubmit} >
        <div className="upload-image flex-col">
          <p>Upload Image</p>
          <label htmlFor="file">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="file" hidden  required/>
        </div>
        <div className="product-name ">
          <p>Product Name</p>
          <input
            onChange={handleInaputCange}
            type="text"
            name="name"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="product-description">
          <p>Product Description</p>
          <textarea
            onChange={handleInaputCange}
            name="description"
            rows="10"
            placeholder="Product Description"
            required
          ></textarea>
        </div>
        <div className="product-categary-price flex-row">
          <div className="product-categary">
            <p>Product Categary</p>
            <select
              onChange={handleInaputCange}
              name="category"
              id="categary"
              required
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodle">Noodle</option>
            </select>
          </div>
          <div className="product-price">
            <p>Product Price</p>
            <input
              onChange={handleInaputCange}
              type="number"
              name="price"
              placeholder="Product Price"
              required
            />
          </div>
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default Add;


// 
