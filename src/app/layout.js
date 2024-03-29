// components
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer';

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
      <body>
        <Navbar />
        <Container maxWidth="lg">
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
