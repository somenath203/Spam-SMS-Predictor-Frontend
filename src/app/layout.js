import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spam SMS Classifier',
  description: 'This is an application which predicts whether a SMS is spam or not',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
          <div className='min-h-screen bg-gradient-to-b from-white to-violet-100'>
            {children}
          </div>
        </Navbar>
      </body>
    </html>
  )
}
