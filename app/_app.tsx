import { AppProps } from 'next/app';
import RootLayout from './layout';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RootLayout>
        <PageTransitionWrapper>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
