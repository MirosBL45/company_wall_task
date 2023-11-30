'use client';

// react/next stuff
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Typography } from '@mui/material';

// style
import '@/app/globals.css';

function AddRole() {
  // button sending text
  const [buttonSend, setButtonSend] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    setButtonSend(true);
    e.preventDefault();
    const role_name = e.target[0].value;
    const description = e.target[1].value;

    try {
      await fetch('/api/roles', {
        method: 'POST',
        body: JSON.stringify({
          role_name,
          description,
        }),
      });
      e.target.reset();
      router?.refresh();
      setTimeout(() => {
        alert('You will be redirected to roles page!');
        setButtonSend(false);
        router?.push('/roles');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center', marginTop: '40px' }}
      >
        Create New Role Here
      </Typography>
      <form className="rolesForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Role name"
          pattern="[a-zA-Z0-9_]{2,16}"
          required
          title="Required alphanumeric value with min length of 2, max length of 16 characters (can contain underscore)"
        />
        <textarea
          type="text"
          placeholder="Short description"
          pattern=".{2,50}"
          title="String with min length of 2 and max length of 50 characters"
        />

        <button>{buttonSend ? 'Sending This Role...' : 'Send New Role'}</button>
      </form>
    </>
  );
}

export default AddRole;
