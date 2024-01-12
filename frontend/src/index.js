import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter,BrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/user/Login';
import Newproduct from './page/product/Newproduct';
import Singup from './page/user/Singup';
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Cart from './page/Cart';
import Success from './page/Success';
import Cancel from './page/Cancel';
import Admin from './page/Admin';
import Manageproduct from './page/Manageproduct';
import Manageuser from './page/Manageuser';
import Facture from './page/facture/Facture';
import Disubproduct from './page/product/Disubproduct';
import Managechat from './page/Managechat';
import Discategory from './page/product/Discategory';
import Dissubcategory from './page/product/Dissubcategory';
import Dissubcategory1 from './page/product/Dissubcategory1';
import Dissubcategory2 from './page/product/Dissubcategory2';
import Managewhatsapp from './page/Managewhatsapp';
import Rendezvous from './page/rendez-vous/Rendezvous';
import Menuproduct from './page/product/Menuproduct';
import Menucoiffure from './page/product/Menucoiffure';
import Menuesthetique from './page/product/Menuesthetique';
import Menucouture from './page/product/Menucouture';
import OffreOfficiel from './page/product/OffreOfficielle';
import Produtsearch from './components/Produtsearch';
import Heart from './components/Heart';
import Heartm from './components/Heartm';
import Modehome from './page/product/Modehome';
import CoiffureHomme from './components/CoiffureHomme';
import AllProduct from './components/AllProduct';
import Temoignage from './page/Temoignage';
import Managedealdujour from './page/Managedealdujour';
import Menudeal from './page/Menudealdujour';
import Manageuserlocal from './page/Manageuserlocal';
import Managedevis from './page/Managedevis';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>} />
         
        {/* <Route path="menu" element={<Menu />} /> */}
        <Route path="menu/:filterby" element={<Menu />} />
        <Route path="menu_deal_du_jour/:filterby" element={<Menudeal />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login/>} />
        <Route path="singup" element={<Singup/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="success" element={<Success/>} />
        <Route path="cancel" element={<Cancel/>} />
        <Route path="about" element = {<About/>}/>
        <Route path="facture" element={<Facture/>}  />
        <Route path="heart" element={<Heart/>}  />
        <Route path="temoignage" element={<Temoignage/>}  />
        <Route path="tout" element={<AllProduct heading="TOUS LES PRODUITS"/>}  />
        <Route path="heartm" element={<Heartm/>}  />
        <Route path="rendez-vous" element={<Rendezvous/>}  />
        <Route path="subcategory/:subCategory" element={<Disubproduct/>}  />
        <Route path= ":category" element={<Discategory/>}  />
        <Route path= ":category/:subCategory" element={<Dissubcategory/>}  />
        <Route path= ":category/:subCategory/:subCategory1" element={<Dissubcategory1/>}  />
        <Route path= ":category/:subCategory/:subCategory1/:subCategory2" element ={<Dissubcategory2/>} />
        <Route path="menu_produit_officiel" element={<Menuproduct/>} />
        <Route path="menu_coiffure_officiel" element={<Menucoiffure/>} />
        <Route path="menu_esthetique_officiel" element={<Menuesthetique/>} />
        <Route path="menu_couture_officiel" element={<Menucouture/>} />
        <Route path="offre_générale_officielle" element={<OffreOfficiel/>} />
        <Route path="categorie_officiel_fitifash/:query" element={<Produtsearch/>}></Route>
        <Route path="produit/officiel/mode_homme" element={<Modehome/>}></Route>
        <Route path="produit/officiel/coiffure_homme" element={<CoiffureHomme/>}></Route>
        <Route path="admin/" element={<Admin/>}>
            <Route path="newproduct" element={<Newproduct/>} />
            <Route path="manageproduct" element={<Manageproduct/>}/>
            <Route path="manageuser" element={<Manageuser/>}/>
            <Route path="managechat" element={<Managechat/>}/>
            <Route path="managewhatsapp" element={<Managewhatsapp/>}/>
            <Route path="managedealdujour" element={<Managedealdujour/>}/>
            <Route path="manageuserlocal" element={<Manageuserlocal/>}/>
            <Route path="managedevis" element={<Managedevis/>}/>
        </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

