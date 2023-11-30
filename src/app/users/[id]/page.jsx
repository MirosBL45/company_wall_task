// react/next stuff
import { notFound } from 'next/navigation';

// style
import '../../globals.css';

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

// components
import UserForm from '@/components/forms/UserForm';
import { BASE_API_URL } from '@/utils/constants';

async function getData(id) {
  const res = await fetch(`${BASE_API_URL}/api/users/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function OneUser({ params }) {
  // check for url
  if (!BASE_API_URL) {
    return <p>conection failed</p>;
  }

  const data = await getData(params.id);

  // if no data show message
  if (!data || data.length === 0) {
    return <div>Loading User from server, coming soon...</div>;
  }
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h3" sx={{ marginTop: '40px', marginBottom: '30px' }}>
        Update User
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current name of User:{' '}
        <span className="colorSpan">{data.first_name}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current last name of User:{' '}
        <span className="colorSpan">{data.last_name}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current email of User: <span className="colorSpan">{data.email}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Current Role name of User:{' '}
        <span className="colorSpan">{data.role_name}</span>
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h6" gutterBottom>
        Update Role in the form below
      </Typography>
      <UserForm initialData={data} />
    </Box>
  );
}

export default OneUser;
