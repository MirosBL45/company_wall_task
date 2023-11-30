// react/next stuff
import { notFound } from 'next/navigation';

// style
import '@/app/globals.css';

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

// components
import RoleForm from '@/components/forms/RoleForm';

async function getData(id) {
  const res = await fetch(`/api/roles/${id}`, {
    // const res = await fetch(`http://localhost:3000/api/roles/${id}`, {
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
    return <div>Loading Role from server, coming soon...</div>;
  }
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h1" gutterBottom>
        Update Role
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current Role name: <span className="colorSpan">{data.role_name}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current Role description:{' '}
        <span className="colorSpan">{data.description}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h6" gutterBottom>
        Update Role in the form below
      </Typography>
      <RoleForm initialData={data} />
    </Box>
  );
}

export default OneRole;
