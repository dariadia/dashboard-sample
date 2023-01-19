import { useRouter } from 'next/router'
import useSWR from 'swr'
import type { CustomerType, ResponseError } from '@types'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function CustomerPage() {
  const { query } = useRouter()
  // @ts-ignore
  const { data, error, isLoading, isValidating } = useSWR<
    CustomerType,
    ResponseError
  >(() => (query.id ? `/api/customers/${query.id}` : null), fetcher)

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Credit card type</th>
          <th>Purchase</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {isValidating ? (
            <td colSpan={7} align="center">
              Fetching, please wait...
            </td>
          ) : (
            <>
              <td>{data.first_name} {data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.credit_card_type}</td>
              <td>{data.currency_code} {data.purchase}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  )
}
