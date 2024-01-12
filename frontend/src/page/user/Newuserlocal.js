import React, { useState } from 'react';
import toast from 'react-hot-toast';


const Newuserlocal = () => {
    const [data, setData] = useState({
        name: "",
        number: "",
        product: "",
        price: ""
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
    
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name,number,product,price } = data;
    
        if (name && number && product && price) {
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/adduserlocal`, {
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
                number: "",
                product: "",
                price: ""
            };
          });
        } else {
          toast("Enter the required fields");
        }
      };

  return (
    <div className="p-4 w-full">
      <form className='w-full max-w-md  rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900' onSubmit={handleSubmit} >
        <label htmlFor='name'>Nom complet</label>
        <input type="text" id="name" name="name" className='rounded text-slate-300 bg-slate-500 p-1 my-1' onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Numero</label>
        <input type="text" id="number" name="number" className='rounded text-slate-300 bg-slate-500 p-1 my-1' onChange={handleOnChange} value={data.number} />
        
        <label htmlFor='price' className='my-1'>Produit</label>
        <input type="text" className='rounded  text-slate-300 bg-slate-500 p-1 my-1' name='product' onChange={handleOnChange} value={data.product} />

        <label htmlFor='price' className='my-1'>Prix</label>
        <input type="text" className='rounded  text-slate-300 bg-slate-500 p-1 my-1' name='price' onChange={handleOnChange} value={data.price} />

        <button className='rounded bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  );
}

export default Newuserlocal;
