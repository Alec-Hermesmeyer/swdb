import Link from 'next/link'
import Image from 'next/image'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings, FiLogIn } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Sidebar = ({ children }) => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/') // Redirect to the login page after successful logout
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
        {session && (
            <>
          <Link href='/hub'>
            <div className='bg-blue-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          
              <Link href='/projects'>
                <div className='bg-gray-200 hover:bg-blue-800 hover:text-white text-black p-3 rounded-lg inline-block cursor-pointer my-4'>
                  <RxDashboard size={20} />
                </div>
              </Link>
              <Link href='/customers'>
                <div className='bg-gray-200 hover:bg-blue-800 hover:text-white text-black p-3 rounded-lg inline-block cursor-pointer my-4'>
                  <RxPerson size={20} />
                </div>
              </Link>
              <Link href='/orders'>
                <div className='bg-gray-200 hover:bg-blue-800 hover:text-white text-black p-3 rounded-lg inline-block cursor-pointer my-4'>
                  <HiOutlineShoppingBag size={20} />
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className='bg-gray-200 hover:bg-blue-800 hover:text-white text-black p-3 rounded-lg inline-block cursor-pointer my-4'
              >
                <FiLogIn size={20} />
              </button>
              <Link href='/'>
            <div className='bg-gray-200 hover:bg-blue-800 hover:text-white text-black p-3 rounded-lg inline-block cursor-pointer my-4'>
              <FiSettings size={20} />
            </div>
          </Link>
            </>
          )}

          
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
