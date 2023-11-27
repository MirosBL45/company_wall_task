// react/next stuff
import Link from 'next/link';

// MaterialUI
import Button from '@mui/material/Button';

function LinkButton({ href, buttonText }) {
  return (
    <Link href={href}>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: '16px', marginBottom: '100px' }}
      >
        {buttonText}
      </Button>
    </Link>
  );
}

export default LinkButton;
