import { CustomerType } from '@types'
import { AdminLayout } from '@layout'
import { Customer } from '@components'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSWRInfinite from "swr/infinite"
import { Button } from 'react-bootstrap'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const getKey = (pageIndex: number, previousPageData: CustomerType[]) => {
  if (previousPageData && !previousPageData.length) return null
  return `/api/customers?page=${pageIndex}`
}

export default function Index() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

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
            {data.map(pageItems => pageItems
              .map((person: CustomerType) => <Customer {...person} key={person.full_name} />))}
          </tbody>
        </table>
      </div>
      <Button className="my-3" variant="primary" onClick={() => setSize(size + 1)}>
        Load more
      </Button>
    </AdminLayout>
  )
}
