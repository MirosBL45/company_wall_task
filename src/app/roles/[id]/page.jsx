// react/next stuff
import { notFound } from 'next/navigation';

// style
import '../../globals.css';

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

// components
import RoleForm from '@/components/forms/RoleForm';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/roles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function OneRole({ params }) {
  const data = await getData(params.id);

  // if no data show message
  if (!data || data.length === 0) {
    return <div>Loading data from server, there is time...</div>;
  }
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h1" gutterBottom>
        Update Role
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current Role name: {data.role_name}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current Role description: {data.description}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Update Role in the form below
      </Typography>
      <RoleForm initialData={data} />
    </Box>
  );
}

export default OneRole;
