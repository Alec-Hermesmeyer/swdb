
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useSession } from '@supabase/auth-helpers-react';
import AuthForm from '@/components/auth-form'
import withAuth from '@/services/withAuth'
import hub from './hub'
import pm from './pm'
import orders from './orders'
import projects from './projects'
import customers from './customers'


const ProtectedHubPage = withAuth(hub)
const ProtectedPMPage = withAuth(pm)
const ProtectedOrdersPage = withAuth(orders)
const ProtectedProjectsPage = withAuth(projects)
const ProtectedCustomersPage = withAuth(customers)

export default function Home() {
  const supabase = createClientComponentClient()
  const session = useSession();


  return (

    <main className='bg-gray-200 min-h screen'>

      <AuthForm />
      {session && (
        <>
          <ProtectedHubPage />
          <ProtectedCustomersPage />
          <ProtectedPMPage />
          <ProtectedOrdersPage />
          <ProtectedProjectsPage />
        </>
      )}


    </main>
  )
}

//  import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// const inter = Inter({ subsets: ['latin'] })
// const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSignup = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { user, error } = await supabase.auth.signUp({
  //       email,
  //       password,
  //     });

  //     if (error) {
  //       alert('Error signing up:', error.message);
  //     } else {
  //       alert('User signed up successfully:', user);
  //       // You can redirect the user to a different page here if needed
  //     }
  //   } catch (error) {
  //     console.error('Error signing up:', error.message);
  //   }
  // };

  // <main className='bg-gray-200 min-h-screen'>
    //   <Header />
    //   <TopCards />
    //  <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
    //    <BarChart />
    //    <RecentOrders />
    //  </div>
    // </main>