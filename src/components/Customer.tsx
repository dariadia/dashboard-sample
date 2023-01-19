import Link from 'next/link'
import type { CustomerType } from '@types'

type CustomerProps = {
  customer: CustomerType
}

export const Customer: React.FC<CustomerProps> = ({ customer }) =>{
  return (
    <li>
      <Link href="/customer/[id]" as={`/customer/${customer.id}`}>
        {customer.name}
      </Link>
    </li>
  )
}