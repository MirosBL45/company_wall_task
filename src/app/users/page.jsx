// MaterialUI
import {
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  // Paper,
  Typography,
} from '@mui/material';

// components
import LinkButton from '@/components/linkButton/LinkButton';

// style
import '../globals.css';

function Users() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Users
      </Typography>
      <LinkButton href="/users/add_user" buttonText="Add User here" />
    </>
  );
}

export default Users;
