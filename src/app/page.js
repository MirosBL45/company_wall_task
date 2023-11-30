// style
import './globals.css'

// MaterialUI
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Typography sx={{ textAlign: 'center', marginTop: '40px' }} variant="h2" gutterBottom>
        Welcome dear customer
      </Typography>
    </main>
  )
}
