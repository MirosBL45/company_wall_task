// react/next stuff
import Link from 'next/link';

// style
import '../globals.css';

function Users() {
  return (
    <div>
      <p>Users</p>
      <Link href="/users/add_user">Add User here</Link>
    </div>
  );
}

export default Users;
