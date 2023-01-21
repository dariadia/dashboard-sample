import { useRouter } from 'next/router'
import useSWR from 'swr'
import type { CustomerType, ResponseError } from '@types'
import Image from 'next/image'

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
              <td>
                <Image src={data.avatar} alt={data.full_name} />
              </td>
              <td>{data.full_name}</td>
              <td>{data.email}</td>
              <td>{data.card_type}</td>
              <td>{data.currency_code} {data.purchased_total}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  )
}
