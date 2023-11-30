'use client';

// react/next stuff
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// style
import '@/app/globals.css';

// MaterialUI
import Box from '@mui/system/Box';

function RoleForm({ initialData }) {
  // button sending text
  const [buttonSend, setButtonSend] = useState(false);

  const router = useRouter();

  // old role data
  const [roleName, setRoleName] = useState(initialData.role_name);
  const [description, setDescription] = useState(initialData.description);

  async function handleUpdate(e) {
    setButtonSend(true);
    e.preventDefault();

    try {
      await fetch(`/api/roles/${initialData._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          role_name: roleName,
          description: description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.refresh();
      setTimeout(() => {
        alert('You will be redirected to roles page!');
        setButtonSend(false);
        router?.push('/roles');
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="rolesForm updateForm" onSubmit={handleUpdate}>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>Role Name:</label>
        <input
          type="text"
          pattern="[a-zA-Z0-9_]{2,16}"
          required
          title="Required alphanumeric value with min length of 2, max length of 16 characters (can contain underscore)"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </Box>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>Description:</label>
        <textarea
          pattern=".{2,50}"
          title="String with min length of 2 and max length of 50 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <button type="submit">
        {buttonSend ? 'Updating This Role...' : 'Update Role'}
      </button>
    </form>
  );
}

export default RoleForm;
