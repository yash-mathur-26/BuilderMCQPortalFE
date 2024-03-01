import './globals.css'
import MainHeader from '@/components/main-header/main-header'

export const metadata = {
  title: 'Builder MCQ App',
  description: 'Give Exam For Builder MCQ Practice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MainHeader/>
        {children}
      </body>
    </html>
  )
}
