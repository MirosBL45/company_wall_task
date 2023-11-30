// react/next stuff
import { notFound } from 'next/navigation';

// style
import '../../globals.css';

// MaterialUI
import { Typography } from '@mui/material';

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
    <div>
      <p>{data.role_name}</p>
      <br />
      <p>{data.description}</p>
      <br />
      <br />
      <p>dole ide forma</p>
      <br />
      <br />
      <RoleForm initialData={data} />
    </div>
  );
}

export default OneRole;
