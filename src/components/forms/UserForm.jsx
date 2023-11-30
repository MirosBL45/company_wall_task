'use client';

// react/next stuff
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// role names
import useRoleNames from '@/utils/apiUtilsRoles';

// style
import '@/app/globals.css';

// MaterialUI
import Box from '@mui/system/Box';

function UserForm({ initialData }) {
  // button sending text
  const [buttonSend, setButtonSend] = useState(false);

  // role names
  const roleNameArray = useRoleNames();

  // old user data
  const [userFirstName, setUserFirstName] = useState(initialData.first_name);
  const [userLastName, setUserLastName] = useState(initialData.last_name);
  const [userEmail, setUserEmail] = useState(initialData.email);

  // for select role
  const [selectedRole, setSelectedRole] = useState(initialData.role_name);
  const handleRoleChange = (event) => setSelectedRole(event.target.value);

  const router = useRouter();

  async function handleUpdate(e) {
    setButtonSend(true);
    e.preventDefault();

    try {
      await fetch(`/api/users/${initialData._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          first_name: userFirstName,
          last_name: userLastName,
          email: userEmail,
          role_name: selectedRole,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      router.refresh();
      setTimeout(() => {
        alert('You will be redirected to users page!');
        setButtonSend(false);
        router?.push('/users');
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
        <label>First Name:</label>
        <input
          type="text"
          pattern="[a-zA-Z]{2,20}"
          required
          title="Only alphabetic characters allowed"
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
        />
      </Box>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>Last Name:</label>
        <input
          type="text"
          pattern="[a-zA-Z]{2,20}"
          required
          title="Only alphabetic characters allowed"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
        />
      </Box>
      <Box
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>Email address:</label>
        <input
          type="email"
          required
          title="Email address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </Box>
      <div className="selectField">
        <label htmlFor="roleDropdown">Select a Role:</label>
        <select
          id="roleDropdown"
          value={selectedRole}
          onChange={handleRoleChange}
          required
        >
          <option value="">Select...</option>
          {roleNameArray.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">
        {buttonSend ? 'Updating This User...' : 'Update User'}
      </button>
    </form>
  );
}

export default UserForm;
