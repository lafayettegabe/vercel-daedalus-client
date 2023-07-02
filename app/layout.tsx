'use client'
import './globals.css'
import { ThemeProvider } from "next-themes"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopButton from '@/components/topButton';
import CookieConsent from '@/components/cookiesModal';
import Metadata from '@/components/Metadata';

// import SetDarkModePreference from '@/components/checkDarkPreference';
// import ScrollSection from '@/components/ScrollSection';
// import PageTransitionWrapper from '@/components/PageTransitionWrapper';

const metadata = {
  title: 'Daedalus Institute',
  description: 'Research and development to advance the technology of humanity',
  icon: './icon.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Metadata title={metadata.title} description={metadata.description} icon={metadata.icon} />
      <body>
        <CookieConsent />
        <TopButton />
        <Header />
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
