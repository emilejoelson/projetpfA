import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from '../../utility/ImagetoBase64';

const Newdealdujour = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  });

 

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const uploadImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: imageData
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image,category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/adddealdujour`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          subcategory: "",
          image: "",
          price: "",
          description: ""
        };
      });
    } else {
      toast("Enter the required fields");
    }
  };

  return (
    <div className="p-4 w-full">
      <form className='w-full max-w-md rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900' onSubmit={handleSubmit}>
        <label htmlFor='name'>Designation</label>
        <input type="text" id="name" name="name" className='rounded text-slate-300 bg-slate-500 p-1 my-1' onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Categorie</label>
        <input type="text" id="category" name="category" className='rounded text-slate-300 bg-slate-500 p-1 my-1' onChange={handleOnChange} value={data.category} />
        <label htmlFor='newimage'>Image
          <div className="h-40 w-full bg-green-400 rounded text-white flex items-center justify-center cursor-pointer">
            {data.image ? <img src={data.image} alt="Product" className="h-full" /> : <span className='text-5xl'><BsCloudUpload /></span>}
            <input type="file" id="newimage" name="image" accept="image/*" onChange={uploadImage} className='hidden' />
          </div>
        </label>
        <label htmlFor='price' className='my-1'>Price</label>
        <input type="text" className='rounded  text-slate-300 bg-slate-500 p-1 my-1' name='price' onChange={handleOnChange} value={data.price} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='rounded bg-slate-500 text-slate-300 p-1 my-1 resize-none' id="image" name='description' onChange={handleOnChange}></textarea>

        <button className='rounded bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  );
}

export default Newdealdujour;
