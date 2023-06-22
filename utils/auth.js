import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@supabase/auth-helpers-react';

const useAuth = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && router.pathname !== '/') {
      router.push('/'); // Redirect to the login page if user is not authenticated
    }
  }, [session, router]);

  return session;
};

export default useAuth;
