'use client';

// react/next stuff
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Typography } from '@mui/material';

// style
import '../../globals.css';

function AddUser() {
  // state for data of users
  const [data, setData] = useState([]);
  // const [roleName, setRoleName] = useState([]);
  let roleNameArray = [];

  // fatch data to get all role_names
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/api/roles');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();

  data.forEach((oneData) => {
    roleNameArray.push(oneData.role_name);
  });

  // button sending text
  const [buttonSend, setButtonSend] = useState(false);

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
      <Typography variant="h1" gutterBottom sx={{ textAlign: 'center' }}>
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
        <button>{buttonSend ? 'Sending This User...' : 'Send New User'}</button>
      </form>
    </>
  );
}

export default AddUser;
