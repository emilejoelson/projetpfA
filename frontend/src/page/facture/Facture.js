import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import Footer from '../../components/Footer';
import enterpriseLogo from '../../assest/p2M.png';

const Facture = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0);
  const totalQty = productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);

  const printRef = useRef(null);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
  };



  return (
    <>  
      <div>
      <div ref={printRef}  className="bg-white text-black p-2 md:p-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={enterpriseLogo} alt="Enterprise Logo" className="h-12" />
          </div>
          <div className="text-right">
            <h1 className="text-4xl font-bold">Facture</h1>
            <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8">
          <div className="py-4">
            <h2 className="text-2xl font-bold">Détails des factures</h2>
            <div className="mt-4">
              <p>Client: {user.firstName + ' ' + user.lastName}</p>
              <p>Email: {user.email}</p>
              {/* Add more customer details here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="py-4">
            <h2 className="text-2xl font-bold">Articles</h2>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-300 border-r-2 border-l-2 border-t-2 text-center font-bold">
                      Produit
                    </th>
                    <th className="border-b-2 border-gray-300 border-r-2 text-center border-t-2 font-bold">Catégorie</th>
                    <th className="border-b-2 border-gray-300 border-r-2 text-center border-t-2 font-bold">
                      Prix Unitaire
                    </th>
                    <th className="border-b-2 border-gray-300 border-r-2 text-center border-t-2 font-bold">Quantité</th>
                    <th className="border-b-2 border-gray-300 border-r-2 text-center border-t-2 font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {productCartItem.map((el) => (
                    <tr key={el._id}>
                      <td className="border-b-2 border-gray-300 border-r-2 border-l-2 text-center">{el.name}</td>
                      <td className="border-b-2 border-gray-300 border-r-2 text-center">{el.category}</td>
                      <td className="border-b-2 border-gray-300 border-r-2 text-center">{el.price} dh</td>
                      <td className="border-b-2 border-gray-300 border-r-2 text-center">{el.qty}</td>
                      <td className="border-b-2 border-gray-300 border-r-2 text-center">{el.total} dh</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-bold border-b-2 border-gray-300 border-r-2 border-l-2 text-center">
                      Total Quantité
                    </td>
                    <td className="italic font-bold border-b-2 border-gray-300 border-r-2 border-l-2 text-center">
                      {totalQty}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-bold border-b-2 border-gray-300 border-r-2 border-l-2 text-center">
                      Total Prix
                    </td>
                    <td className="italic font-bold border-b-2 border-gray-300 border-r-2 border-l-2 text-center">
                      {totalPrice} dh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-white text-black ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePrint}>
                 Imprimer
              </button>
              
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Facture;
