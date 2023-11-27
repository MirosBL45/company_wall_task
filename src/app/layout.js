import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

// components
import Navbar from '@/components/navbar/Navbar'

// MaterialUI
import { Container } from '@mui/material';

export const metadata = {
  title: 'Miroslav Jovic Task',
  description: 'Miroslav Jovic Task for CompanyWall',
  keywords: 'HTML, CSS, SCSS, JavaScript, programming, ReactJS, NextJS, Next, React, Material Design, MongoDB, Mongoose, Miroslav Jovic',
  icons: {
    icon: [{ url: '/logoMJ.png' }],
    shortcut: '/logoMJ.png',
    apple: '/logoMJ.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logoMJ.png',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: 'Jovic Miroslav',
  category: 'technology',
  publisher: 'Jovic Miroslav',
  applicationName: 'Miroslav Jovic Task',
  authors: [{ name: 'Jovic Miroslav' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container maxWidth="lg">
          {children}
        </Container>
      </body>
    </html>
  )
}
