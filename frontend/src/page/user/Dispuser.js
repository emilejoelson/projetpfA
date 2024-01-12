import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers, deleteUser } from '../../redux/userSlice';
import { Box, Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { toast } from 'react-hot-toast';

function Dispuser() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userList);
  const nameList = [...new Set(userData.map((el) => el.firstName))];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/deleteuser/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Remove the deleted user from the userData state
          const updatedUserData = userData.filter((user) => user._id !== userId);
          dispatch(deleteUser(userId));
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Suppression de produit échouée');
      });
  };

  const ActionsCell = (params) => {
    return (
      <div>
        <Button variant="outlined" onClick={() => handleDelete(params.row._id)} sx={{ width: '10px' }}>
          <HighlightOffIcon size={20} sx={{ color: 'red' }} />
        </Button>
        <Button variant="outlined">
          <EditIcon sx={{ color: colors.greenAccent[600] }} />
        </Button>
      </div>
    );
  };
  const ImageCell = (params) => {
    return <img src={params.value} alt={params.row.name} style={{ overflow: 'hidden', borderRadius: '100%', width: '100%', height: '100%' }} />;
  };

  const columns = [
    { field: 'image', headerName: 'Photo', headerAlign: 'center', align: 'center', renderCell: ImageCell },
    { field: 'firstName', headerName: 'Nom', headerAlign: 'center', width: '240', align: 'center', cellClassName: 'centered-cell' },
    { field: 'lastName', headerName: 'Prénom', headerAlign: 'center', width: '240', align: 'center', cellClassName: 'centered-cell' },
    { field: 'email', headerName: 'Email', headerAlign: 'center', width: '240', align: 'center', cellClassName: 'centered-cell' },
    { field: 'actions', headerName: 'Actions', width: 215, align: 'center', headerAlign: 'center', renderCell: ActionsCell },
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
          width: '92%',
        }}
      >
        <DataGrid checkboxSelection rows={userData} getRowId={getRowId} columns={columns} />
      </Box>
    </Box>
  );
}

export default Dispuser;
