import { redirect } from 'next/navigation'

export default function ForgotPassword () {
  return redirect('/auth/forgot-password/email')
}
