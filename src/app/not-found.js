import Link from 'next/link';

import './globals.css'

// MaterialUI
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

export default function NotFound() {
    return (
        <Box component="section" sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>This page is not in the Assignment Task :) </Typography>
            <Typography variant="h4" gutterBottom>Could not find requested resource for you. Hello by Ruby the Cat</Typography>
            <Link href="/">Return Home</Link>
        </Box>
    )
}