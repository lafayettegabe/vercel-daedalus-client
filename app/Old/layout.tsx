'use client';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SetDarkModePreference from '@/components/checkDarkPreference';
import CookiesModal from '@/components/cookiesModal'

export const metadata = {
  title: 'Daedalus Institute',
  description: 'Research and development to advance the technology of humanity',

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <html lang="en" className='img'>
        <CookiesModal />
      <body className="">
        <Header />

        <div className="">
          {children}
        </div>

        <Footer />
      </body>
      <SetDarkModePreference />
    </html>
  );
}
