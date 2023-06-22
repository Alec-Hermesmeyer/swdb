import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@supabase/auth-helpers-react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!session) {
        router.push('/'); // Redirect to the login page if not logged in
      }
    }, [session, router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
