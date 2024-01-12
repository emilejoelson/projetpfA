import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from '../../utility/ImagetoBase64';

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    subcategory: "",
    subcategory1: "",
    subcategory2: "",
    image: "",
    price: "",
    description: ""
  });

  const categories = {
    Fitifash: {
      Produits: {
        "Prêt à porter": ["Homme", "Femme", "Enfant"],
        Accessoires : [],
        "Produits de beauté": []
      },
      Esthétique: {
        Coiffure: ["Damme", "Homme"],
        "Pédicure et manicure": [],
        Nappy: ["Soin", "Tresses protectrices", "Tresses avec Extensions"]
      },
      Coutures: {
        Femme: [],
        Homme: [],
        Enfant: []
      }
    },
    FitiDesign: {
      Meubles : [],
      "Décorations intérieures": [],
      Comptoirs: [],
      Baignoires: [],
      Vasques: [],
      "Plans de travail de cuisine": [],
      "Espace bureau ou laboratoire": []
    }
  };

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

    const { name, image, category, subcategory, subcategory1, subcategory2, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`, {
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
          subcategory1: "",
          subcategory2: "",
          image: "",
          price: "",
          description: ""
        };
      });
    } else {
      toast("Enter the required fields");
    }
  };

  const handleCategoryMouseEnter = (e) => {
    const { value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        category: value,
        subcategory: "",
        subcategory1: "",
        subcategory2: ""
      };
    });
  };

  const handleSubcategoryMouseEnter = (e) => {
    const { value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        subcategory: value,
        subcategory1: "",
        subcategory2: ""
      };
    });
  };

  const handleSubcategory1MouseEnter = (e) => {
    const { value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        subcategory1: value,
        subcategory2: ""
      };
    });
  };

  const handleSubcategory2MouseEnter = (e) => {
    const { value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        subcategory2: value
      };
    });
  };

  return (
    <div className="p-4 w-full">
      <form className='w-full max-w-md rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900' onSubmit={handleSubmit}>
        <label htmlFor='name'>Designation</label>
        <input type="text" id="name" name="name" className='rounded text-slate-300 bg-slate-500 p-1 my-1' onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Categorie</label>
        <select className='rounded text-slate-300 bg-slate-500 p-1 my-1' id='category' name='category' onMouseEnter={handleCategoryMouseEnter} onChange={handleOnChange} value={data.category}>
          <option value="">Select Category</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        {data.category && (
          <div className="ml-[45%]">
            <label htmlFor='subcategory'>Subcategory</label>
            <select className='rounded  w-full text-slate-300 bg-slate-500 p-1 my-1' id='subcategory' name='subcategory' onMouseEnter={handleSubcategoryMouseEnter} onChange={handleOnChange} value={data.subcategory}>
              <option value="">Select Subcategory</option>
              {Object.keys(categories[data.category]).map((subcategory) => (
                <option key={subcategory} value={subcategory}>{subcategory}</option>
              ))}
            </select>
          </div>
        )}

        {data.subcategory && (
          <div className="ml-[45%]">
            <label htmlFor='subcategory1'>Subcategory 1</label>
            <select className='rounded  w-full text-slate-300 bg-slate-500 p-1 my-1' id='subcategory1' name='subcategory1' onMouseEnter={handleSubcategory1MouseEnter} onChange={handleOnChange} value={data.subcategory1}>
              <option value="">Select Subcategory 1</option>
              {Object.keys(categories[data.category][data.subcategory]).map((subcategory1) => (
                <option key={subcategory1} value={subcategory1}>{subcategory1}</option>
              ))}
            </select>
          </div>
        )}

        {data.subcategory1 && (
          <div className="ml-[45%]">
            <label htmlFor='subcategory2'>Subcategory 2</label>
            <select className='rounded  w-full text-slate-300 bg-slate-500 p-1 my-1' id='subcategory2' name='subcategory2' onMouseEnter={handleSubcategory2MouseEnter} onChange={handleOnChange} value={data.subcategory2}>
              <option value="">Select Subcategory 2</option>
              {categories[data.category][data.subcategory][data.subcategory1].map((subcategory2) => (
                <option key={subcategory2} value={subcategory2}>{subcategory2}</option>
              ))}
            </select>
          </div>
        )}

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

export default Newproduct;
