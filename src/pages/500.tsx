import { AdminLayout } from '@layout'
import Link from 'next/link'

export default function FiveHuns() {
  return <AdminLayout>
    <h1 className="text-center text-white my-5">500 - Server Error</h1>
    <p className="text-center text-white">Don&apos;t worry! We&apos;re on it</p>
    <Link href="/" legacyBehavior>
      <a className="text-center text-white auto d-block">
        Go back home
      </a>
    </Link>
  </AdminLayout>
}
