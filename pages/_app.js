import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabaseUrl = 'https://qhiwobrqftpbwsxjvhdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaXdvYnJxZnRwYndzeGp2aGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMDYxNDksImV4cCI6MTk5NTY4MjE0OX0.sz1TxezhnyIPIqCvOpAq2G5ZiiDwFQkWZlRxKnvLLLk'


export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <SessionContextProvider
    supabaseClient={supabaseClient}
    initialSession={pageProps.initialSession}>
      <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </SessionContextProvider>
  )
}