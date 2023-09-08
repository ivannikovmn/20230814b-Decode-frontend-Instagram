import './globals.css'
import ReduxProvider from './store/provider'
export const metadata = {
  title: 'Instagram.com',
  description: 'It is a photo and video sharing social networking service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>      
      </body>
    </html>
  )
}
