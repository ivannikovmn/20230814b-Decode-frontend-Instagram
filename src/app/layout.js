import './globals.css'

export const metadata = {
  title: 'Instagram.com',
  description: 'It is a photo and video sharing social networking service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
