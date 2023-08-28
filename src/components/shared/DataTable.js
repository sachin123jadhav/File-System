import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardBody } from '@material-tailwind/react';


const DataTable = ({ data }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterText, setFilterText] = useState('');
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  
    return (
        <Card className='relative overflow-x-auto shadow-md sm:rounded-lg py-4'>
        <CardBody>
      
        <TextField
          label="Search"
          variant="outlined"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
        <TableContainer component={Paper}>
          <Table className='w-full min-w-max table-auto text-left'>
            <TableHead className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
              <TableRow className='dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' >
              <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                {/* Add more headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={item.id} className='dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    {/* Render other data cells */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      
      </CardBody>
      </Card>
    );
  };
  
  export default DataTable;
  