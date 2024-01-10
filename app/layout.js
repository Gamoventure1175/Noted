import Navbar from '@/components/Navbar';
import './globals.css';
import { Container} from '@mui/material'
import { ClerkProvider } from '@clerk/nextjs';

import CssBaseline from "@mui/material/CssBaseline"

export const metadata = {
  title: 'Noted',
  description: 'Designed by Gamoventure',
  
}

export default async function RootLayout({ children }) {

  // const session = await getServerSession();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
            <CssBaseline />
              <Navbar />
              <Container maxWidth='xl'>
                {children}
              </Container>
        </body>
      </html>
    </ClerkProvider>
  )
}
