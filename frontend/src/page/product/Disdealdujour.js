import { useTheme } from '@emotion/react';
import { Box, Button} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { tokens } from '../../theme';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/productSlide';
import { toast } from 'react-hot-toast';
import { BsEyeFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Editproduct from './Editproduct';
import { deleteDealdujour, fetchDealdujour } from '../../redux/dealdujourSlide';

function Disdealdujour() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditFormVisible(true);
  };

  const handleSave = (productId) => {
    setSelectedProduct(productId);
    setIsEditFormVisible(false);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setIsEditFormVisible(false);
  };

  const dispatch = useDispatch();
  const productData = useSelector((state) =>state.dealdujour.dealdujourList);
  console.log("Produits : "+ productData);

  
  useEffect(() => {
    dispatch(fetchDealdujour());
  }, [dispatch]);

  const handleDelete = (productId) => {
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/deletedealdujour/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(deleteDealdujour(productId));
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Suppression de product échouée');
      });
  };

  const ActionsCell = (params) => {
    return (
      <div>
        <Button variant="outlined">
          <Link
            to={`/menu_deal_du_jour/${params.row._id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <BsEyeFill
              size={20}
              color="rgb(255 255 255 / 83%)"
            />
          </Link>
        </Button>
        <Button variant="outlined" onClick={() => handleDelete(params.row._id)} sx={{ width: "10px" }}>
          <HighlightOffIcon size={20} sx={{ color: "red" }} />
        </Button>
        <Button variant="outlined">
          <EditIcon sx={{ color: colors.greenAccent[600] }} />
        </Button>
      </div>
    );
  };

  const ImageCell = (params) => {
    return <img src={params.value} alt={params.row.name} style={{ width: 'auto', height: 'auto' }} />;
  };

  const columns = [
    { field: 'image', headerName: 'Produit', headerAlign: 'center', renderCell: ImageCell },
    { field: 'name', headerName: 'Designation', headerAlign: 'center', cellClassName: 'name-column--cell' },
    { field: 'category', headerName: 'Categorie' },
    { field: 'price', headerName: 'Prix', type: 'number', width: 50, headerAlign: 'center' },
    { field: 'description', headerName: 'Description' },
    { field: 'actions', headerName: 'Actions', width: 215, headerAlign: 'center', renderCell: ActionsCell },
  ];

  const getRowId = (row) => row._id;

  return (
    <Box ml="50px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          width: '97%'
        }}
      >
        <DataGrid checkboxSelection rows={productData} getRowId={getRowId} columns={columns} />
      </Box>
      {isEditFormVisible && selectedProduct && (
        <Editproduct product={selectedProduct} onSave={handleSave} onCancel={handleCancel} />
      )}
    </Box>
  );
}


export default Disdealdujour;
