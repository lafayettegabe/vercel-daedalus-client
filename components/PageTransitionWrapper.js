import { useRouter } from 'next/navigation';
import { PageTransition } from 'next-page-transitions';


const PageTransitionWrapper = ({ children }) => {
    const router = useRouter();
  
    return (
      <PageTransition
        timeout={500}
        classNames="page-transition"
        loadingClassNames="loading-indicator"
        loadingDelay={500}
        loadingTimeout={{
          enter: 300,
          exit: 300,
        }}
        loadingComponent={<div>Loading...</div>}
        loadingCallback={() => router.push(router.pathname)}
      >
        {children}
      </PageTransition>
    );
  };
  
  export default PageTransitionWrapper;
  