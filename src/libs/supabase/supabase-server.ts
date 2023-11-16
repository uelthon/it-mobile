import { createServerClient } from '@supabase/ssr'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

const supabaseServer = ({ cookies }: { cookies: () => ReadonlyRequestCookies }) => createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  {
    cookies: {
      get (name: string) {
        return cookies().get(name)?.value
      }
    }
  }
)

export default supabaseServer
