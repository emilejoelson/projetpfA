import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { deleteUser, fetchUserlocals } from '../../redux/userSlice';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { toast } from 'react-hot-toast';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
function Dispuserlocal() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const userlocalData = useSelector((state) => state.user.userlocalList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUserlocals());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user locals', error);
        toast.error('Error fetching user locals');
      }
    };

    fetchData();
  }, [dispatch]);

  const columns = [
    { field: 'name', headerName: 'Nom', headerAlign: 'center', width: '160', align: 'center', cellClassName: 'centered-cell' },
    { field: 'number', headerName: 'Numero', headerAlign: 'center', width: '160', align: 'center', cellClassName: 'centered-cell' },
    { field: 'product', headerName: 'Produit', headerAlign: 'center', width: '160', align: 'center', cellClassName: 'centered-cell' },
    { field: 'price', headerName: 'Prix', headerAlign: 'center', width: '160', align: 'center', cellClassName: 'centered-cell' },
    { field: 'createdAt', headerName: 'Date', headerAlign: 'center', width: '160', align: 'center', cellClassName: 'centered-cell', valueFormatter: createDateFormatter },
  ];


  const getRowId = (row) => row._id;
  function createDateFormatter(params) {
    const createdAt = new Date(params.value);
    const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: fr });
    return timeAgo;
  }
  
  
  if (loading) {
    return <p>Loading...</p>;
  }

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
        {userlocalData && userlocalData.length > 0 ? (
          <DataGrid checkboxSelection rows={userlocalData} getRowId={getRowId} columns={columns} />
        ) : (
          <p>No data available</p>
        )}
      </Box>
    </Box>
  );
}

export default Dispuserlocal;
