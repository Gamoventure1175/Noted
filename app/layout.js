import Navbar from '@/components/Navbar';
import './globals.css';
import { Container} from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ClerkProvider } from '@clerk/nextjs';
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';


export const metadata = {
  title: 'Noted',
  description: 'Designed by Gamoventure',
  
}

export default async function RootLayout({ children }) {
  
  // const session = await getServerSession();
  
  
  return (

      <ClerkProvider>
        <ThemeProvider theme={theme}>
          <html lang="en">
            <body>
              <CssBaseline />
                <Navbar />
                <Container maxWidth='xl'>
                  <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    {children}
                  </AppRouterCacheProvider>
                </Container>
            </body>
          </html>
        </ThemeProvider>
      </ClerkProvider>

  )
}
