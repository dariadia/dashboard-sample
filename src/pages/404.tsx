import { AdminLayout } from '@layout'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <AdminLayout>
      <h1 className="text-center text-white my-5">404 - Page Not Found</h1>
      <Link href="/" legacyBehavior>
        <a className="text-center text-white auto d-block">
          Go back home
        </a>
      </Link>
    </AdminLayout>
  )
}
