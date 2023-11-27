// react/next stuff
import Link from 'next/link';

// MaterialUI
import Button from '@mui/material/Button';

function LinkButton({ href, buttonText }) {
  return (
    <Link href={href}>
      <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
        {buttonText}
      </Button>
    </Link>
  );
}

export default LinkButton;
