// react/next stuff
import { notFound } from 'next/navigation';

// style
import '../../globals.css';

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

// components
import UserForm from '@/components/forms/UserForm';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function OneUser({ params }) {
  const data = await getData(params.id);

  // if no data show message
  if (!data || data.length === 0) {
    return <div>Loading User from server, coming soon...</div>;
  }
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h1" gutterBottom>
        Update User
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current name of User: {data.first_name}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current last name of User: {data.last_name}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current email of User: {data.email}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="body1" gutterBottom>
        Current Role name of User: {data.role_name}
      </Typography>
      <Typography sx={{ marginBottom: '20px' }} variant="h5" gutterBottom>
        Update Role in the form below
      </Typography>
      <UserForm initialData={data} />
    </Box>
  );
}

export default OneUser;
