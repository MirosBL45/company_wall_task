'use client';

// react/next stuff
import { useState } from 'react';
import Link from 'next/link';

// MaterialUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Paper,
} from '@mui/material';

// components
import LinkButton from '@/components/linkButton/LinkButton';

// style
import '@/app/globals.css';

function Users() {
  // state for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // state for data of users
  const [data, setData] = useState([]);

  // fatch that data and store it
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();

  // if no data show message
  if (!data || data.length === 0) {
    return (
      <Typography variant="h2" sx={{ marginTop: '50px' }} gutterBottom>
        Loading users from server, coming soon...
      </Typography>
    );
  }

  // sorting data by date
  const sortedData = [...data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // doing pagination
  const handleChangePage = (event, newPage) => setPage(newPage);

  // doing pagination
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  // format date and time
  function formatDateTime(dateTimeString) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('en-US', options).format(
      new Date(dateTimeString)
    );
  }

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Users
      </Typography>
      <Typography sx={{ marginBottom: '36px' }} variant="h3" gutterBottom>
        Click on each User Name to edit
      </Typography>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    First Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Last Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Role Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Created At
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Link href={`/users/${user._id}`}>
                        <Typography>{user.first_name}</Typography>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/users/${user._id}`}>
                        <Typography>{user.last_name}</Typography>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/users/${user._id}`}>
                        <Typography>{user.role_name}</Typography>
                      </Link>
                    </TableCell>
                    <TableCell>{formatDateTime(user.createdAt)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 25, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <LinkButton href="/users/add_user" buttonText="Add User here" />
    </>
  );
}

export default Users;
