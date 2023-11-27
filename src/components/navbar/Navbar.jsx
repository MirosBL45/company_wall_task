// react/next stuff
import Link from 'next/link';

// MaterialUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CW Task
        </Typography>
        <Link style={{ marginRight: '15px' }} href="/">
          Home
        </Link>
        <Link style={{ marginRight: '15px' }} href="/roles">
          Roles
        </Link>
        <Link href="/users">Users</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
