import Box from '@mui/material/Box';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: 0,
      }}
    >
      &copy;{currentYear} All rights reserved. Coded by{' '}
      <a
        href="https://github.com/MirosBL45"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jović Miroslav
      </a>
      . Repo of this project is{' '}
      <a
        href="https://github.com/MirosBL45/company_wall_task"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </Box>
  );
}

export default Footer;
