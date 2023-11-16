import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import supabaseHandler from '@/libs/supabase/supabase-handler'

import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || ''

  if (code) {
    const supabase = supabaseHandler({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}${next}`)
}
