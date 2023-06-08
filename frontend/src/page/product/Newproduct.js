import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
const Newproduct = () => { 

  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
   // console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
}
const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(data)

    const {name,image,category,price} = data

    if(name && image && category && price){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes =  await fetchData.json()
  
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(()=>{
        return{
          name : "",
          category : "",
          image : "",
          price : "",
          description : ""
        }
      })
    }
    else{
      toast("Entrer le champ vide")
    }
}
  return (
<div className="p-4 w-full ">
       <form className='w-full max-w-md rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900' onSubmit={handleSubmit}>
       
       <label htmlFor='name'>Designation  </label> <input type={"text"}  id="name" name="name" className='rounded text-slate-300 bg-slate-500 p-1 my-1'  onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Categorie</label>
        <select className=' rounded text-slate-300 bg-slate-500 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>Selectionner </option>
          <option value={"Informatique"}>Informatique</option>
          <option value={"Nouvel Arrivage"}>Nouvel Arrivage </option>
          <option value={"Promotion"}>Promotion</option>
          <option value={"Vêtement & Chaussure"}>Vêtement & Chaussure</option>
          <option value={"Beauté & Santé"}>Beauté & Santé</option>
          <option value={"Jeux Vidéos & Consoles"}>Jeux Vidéos & Consoles</option>
          <option value={"Sports & Loisirs"}>Sports & Loisirs</option>
          <option value={"Bébé & Jouets"}>Bébé & Jouets</option>
          <option value={"Supermaché"}>Supermaché</option>
          <option value={"Musique"}>Musique</option>
          {/* <option value={"sandwich"}>Sandwich</option> */}
        </select>
        <label htmlFor='newimage'>Image
        <div className="h-40 w-full bg-green-400 rounded text-white flex items-center justify-center cursor-pointer">
        {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-5xl'><BsCloudUpload/></span> 
          }
            
            <input type={"file"}  id ="newimage" name="image" accept="image/*" onChange={uploadImage} className='hidden'/>
        </div>
        </label>
        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className=' rounded  text-slate-300 bg-slate-500 p-1 my-1' name='price' onChange={handleOnChange} value={data.price}/>
        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='rounded bg-slate-500 text-slate-300 p-1 my-1 resize-none'id="image" name='description' onChange={handleOnChange}></textarea>

        <button className='rounded bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
     
    </form>
      </div>
  );
}

export default Newproduct;
