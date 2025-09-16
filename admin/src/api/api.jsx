import  axios from "axios"

const  api = axios.create({
    baseURL:"http://localhost:5000/api/food",
})

export const AddData =async(data)=>{
   return  await api.post(`/add`,data,{
            headers:{"Content-Type":"multipart/form-data"}
          }); 
}
export const fetchData =async(data)=>{
   return  await api.get(`/list`); 
}
