import useSWR from 'swr'
import { CustomerType } from '@types'
import { AdminLayout } from '@layout'
import { Customer } from '@components'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  // @ts-ignore
  const { data, error, isLoading } = useSWR<CustomerType[]>('/api/customers', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <AdminLayout>
      <div className="table-responsive">
              <table className="table table-dark border mb-0">
                <thead className="table-dark fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">
                      <FontAwesomeIcon icon={faUsers} fixedWidth />
                    </th>
                    <th>Customer Name</th>
                    <th>Purchase</th>
                    <th className="text-center">Company name | Industry</th>
                    <th className="text-center">Payment Method</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  {data.map(person => <Customer {...person} key={person.full_name} />)}
                </tbody>
              </table>
            </div></AdminLayout>
  )
}
