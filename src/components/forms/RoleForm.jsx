'use client';

// react/next stuff
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function RoleForm({ initialData }) {
  const router = useRouter();
  const [roleName, setRoleName] = useState(initialData.role_name);
  const [description, setDescription] = useState(initialData.description);

  async function handleUpdate(e) {
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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Role Name:
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default RoleForm;
