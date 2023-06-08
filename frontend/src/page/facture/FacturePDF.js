import { PDFViewer, Document, Image, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import enterpriseLogo from '../../assest/p2M.png';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';

const FacturePDF = ({ productCartItem, user, totalPrice, totalQty }) => {

  // Define the columns for the data grid
  const columns = [
    { field: 'name', headerName: 'Produit', width: 150 },
    { field: 'category', headerName: 'Catégorie', width: 150 },
    { field: 'price', headerName: 'Prix Unitaire', width: 150 },
    { field: 'qty', headerName: 'Quantité', width: 150 },
    { field: 'total', headerName: 'Total', width: 150 },
  ];

  // Map the productCartItem to data grid rows
  const rows = productCartItem.map((el) => ({
    id: el._id,
    name: el.name,
    category: el.category,
    price: `${el.price} dh`,
    qty: el.qty,
    total: `${el.total} dh`,
  }));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={enterpriseLogo} style={styles.logo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Invoice</Text>
          <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Customer Details:</Text>
          <Text>{user.firstName + ' ' + user.lastName}</Text>
          <Text>{user.email}</Text>
          {/* Add more customer details here */}
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Product Details:</Text>
          <View style={styles.table}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              autoHeight
              disableSelectionOnClick
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    height: 'auto',
  },
});

export default FacturePDF;

