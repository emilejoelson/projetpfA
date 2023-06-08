import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
import { useDispatch } from 'react-redux';
import { editProduct } from '../../redux/productSlide';
import { Button, Modal, TextField } from '@mui/material';
const Editproduct = ({ product, onSave, onCancel }) => {
    const [data, setData] = useState({
        _id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
      });
    
            const handleOnChange = (e) => {
                const { name, value } = e.target;
                setData((prevData) => ({
                ...prevData,
                [name]: value,
                }));
            };
           

            const uploadImage = async (e) => {
                const imageData = await ImagetoBase64(e.target.files[0]);
                setData((prevData) => ({
                  ...prevData,
                  image: imageData,
                }));
              };
            
              const handleSubmit = async (e) => {
                e.preventDefault();
            
                const updatedProductData = {
                  name: data.name,
                  image: data.image,
                  price: data.price,
                  description: data.description,
                };
                try {
                    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/updateproduct/${product._id}`, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(updatedProductData),
                    });
              
                    if (response.ok) {
                      const updatedProduct = await response.json();
                      onSave(product._id);
                      toast("Mise à jour avec succès");
                    } else {
                      // Handle error response
                       toast.error('Failed to update product');
                    }
                  } catch (error) {
                    console.log(error);
                    // Handle fetch error
                    toast.error('Failed to update product');
                  }
                };
            
              

            return (
            <Modal open onClose={onCancel}>
                <div className="p-4 w-full">
                  <form className="w-full max-w-md rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900" onSubmit={handleSubmit}>
                    <label htmlFor="name">Designation</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="rounded text-slate-300 bg-slate-500 p-1 my-1"
                      onChange={handleOnChange}
                      value={data.name}
                    />
            
                    <label htmlFor="category">Categorie</label>
                    <select
                      className="rounded text-slate-300 bg-slate-500 p-1 my-1"
                      id="category"
                      name="category"
                      onChange={handleOnChange}
                      value={data.category}
                    >
                      <option value="other">Selectionner</option>
                      <option value="Informatique">Informatique</option>
                      <option value="Nouvel Arrivage">Nouvel Arrivage</option>
                      <option value="Promotion">Promotion</option>
                      <option value="Vêtement & Chaussure<">Vêtement & Chaussure</option>
                      <option value="Beauté & Santé">Beauté & Santé</option>
                      <option value="Jeux Vidéos & Consoles">Jeux Vidéos & Consoles</option>
                      <option value="Sports & Loisirs">Sports & Loisirs</option>
                      <option value="Bébé & Jouets">Bébé & Jouets</option>
                      <option value="Supermaché">Supermaché</option>
                      <option value="Musique">Musique</option>
                    </select>
                    
                    <label htmlFor="editimage">Image 
                            <div className="h-40 w-full bg-green-400 rounded text-white flex items-center justify-center cursor-pointer">
                            {data.image ? (
                                <img src={data.image} alt="Product" className="h-full" />
                            ) : (
                                <span className="text-5xl">
                                <BsCloudUpload />
                                </span>
                            )}
                            <input type="file" id="editimage" name="image" accept="image/*" onChange={uploadImage} className="hidden" />
                            </div>
                    </label>
                    <label htmlFor="price" className="my-1">
                      Price
                    </label>
                    <input
                      type="text"
                      className="rounded text-slate-300 bg-slate-500 p-1 my-1"
                      name="price"
                      onChange={handleOnChange}
                      value={data.price}
                    />
                    
                    <label htmlFor="description">Description</label>
                    <textarea
                      rows={2}
                      value={data.description}
                      className="rounded bg-slate-500 text-slate-300 p-1 my-1 resize-none"
                      id="description"
                      name="description"
                      onChange={handleOnChange}
                    ></textarea>
                    
                    <div className="flex gap-3">
                        <button className="rounded w-[92%] bg-indigo-950   hover:bg-green-600 text-white text-lg font-medium my-2 drop-shadow" type="submit">
                        Save
                        </button>
                        <button
                        className="rounded  bg-red-500 w-[5%] hover:bg-yellow-500 text-white text-lg font-medium my-2 drop-shadow"
                        onClick={onCancel}
                        >
                            X
                        </button>
                    </div>
                    
    
                  </form>
                </div>
            </Modal>
              );
            };

export default Editproduct;
