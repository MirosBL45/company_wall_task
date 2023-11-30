// react/next stuff
import { notFound } from 'next/navigation';

// style
import '@/app/globals.css';

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

// components
import RoleForm from '@/components/forms/RoleForm';
import { BASE_API_URL } from '@/utils/constants';

async function getData(id) {
  const res = await fetch(`${BASE_API_URL}/api/roles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function OneRole({ params }) {
  // check for url
  if (!BASE_API_URL) {
    return <p>conection failed</p>;
  }

  const data = await getData(params.id);

  // if no data show message
  if (!data || data.length === 0) {
    return <div>Loading Role from server, coming soon...</div>;
  }
  return (
    <Box component="section" sx={{ p: 2, marginTop: '40px' }}>
      <Typography variant="h3" sx={{ marginBottom: '30px' }}>
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
