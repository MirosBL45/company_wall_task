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
} from '@mui/material';

// components
import LinkButton from '@/components/linkButton/LinkButton';

// style
import '@/app/globals.css';

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

  // if there is no data immediately, show a message
  if (!data || data.length === 0) {
    return <div>Loading roles from server, coming soon...</div>;
  }

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
      <Typography sx={{ marginBottom: '36px' }} variant="h3" gutterBottom>
        Click on each Role Name to edit
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ marginBottom: '36px', padding: '16px' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" fontWeight="bold">
                  Role Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueAndSortedData().map((role) => (
              <TableRow key={role._id}>
                <TableCell>
                  <Link href={`/roles/${role._id}`}>
                    <Typography>{role.role_name}</Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/roles/${role._id}`}>
                    <Typography>
                      {role.description
                        ? role.description
                        : '***--- This role has no description ---***'}
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LinkButton href="/roles/add_role" buttonText="Add Role here" />
    </>
  );
}

export default Roles;
