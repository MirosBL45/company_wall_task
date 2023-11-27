// react/next stuff
import Link from 'next/link';

// MaterialUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';

// style
import '../globals.css';

// function for catching data
async function getData() {
  const res = await fetch('http://localhost:3000/api/roles', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Roles() {
  const data = await getData();

  // A function that removes duplicates and sorts alphabetically
  function uniqueAndSortedData() {
    // Duplicate removal
    const uniqueData = Array.from(
      new Set(data.map((role) => role.role_name))
    ).map((roleName) => {
      return data.find((role) => role.role_name === roleName);
    });

    // Alphabetical sorting
    const sortedData = uniqueData
      .slice()
      .sort((a, b) => a.role_name.localeCompare(b.role_name));

    return sortedData;
  }

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Roles
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ marginBottom: '36px', padding: '16px' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Role Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueAndSortedData().map((role) => (
              <TableRow key={role._id}>
                <TableCell>
                  <Typography>{role.role_name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{role.description}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/roles/add_role">
        <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
          Add Role here
        </Button>
      </Link>
    </>
  );
}

export default Roles;
