'use client';

// react/next stuff
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// role names
import useRoleNames from '@/utils/apiUtilsRoles';

// MaterialUI
import { Typography } from '@mui/material';

// style
import '@/app/globals.css';

function AddUser() {
  // button sending text
  const [buttonSend, setButtonSend] = useState(false);

  // role names
  const roleNameArray = useRoleNames();

  const router = useRouter();

  async function handleSubmit(e) {
    setButtonSend(true);
    e.preventDefault();
    const first_name = e.target[0].value;
    const last_name = e.target[1].value;
    const email = e.target[2].value;
    const role_name = selectedRole;

    try {
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          role_name,
        }),
      });
      e.target.reset();
      router?.refresh();
      setTimeout(() => {
        alert('You will be redirected to users page!');
        setButtonSend(false);
        router?.push('/users');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  // for select role
  const [selectedRole, setSelectedRole] = useState('');
  const handleRoleChange = (event) => setSelectedRole(event.target.value);

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center', marginTop: '40px' }}
      >
        Create New User Here
      </Typography>
      <form className="rolesForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          pattern="[a-zA-Z]{2,20}"
          required
          title="Only alphabetic characters allowed"
        />
        <input
          type="text"
          placeholder="Last name"
          pattern="[a-zA-Z]{2,20}"
          required
          title="Only alphabetic characters allowed"
        />
        <input
          type="email"
          placeholder="Email address"
          required
          title="Email address"
        />
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
        <button disabled={buttonSend}>
          {buttonSend ? 'Sending This User...' : 'Send New User'}
        </button>
      </form>
    </>
  );
}

export default AddUser;
