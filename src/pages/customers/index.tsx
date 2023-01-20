import useSWR from 'swr'
import { Customer } from '@components'
import { CustomerType } from '@types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  // @ts-ignore
  const { data, error, isLoading } = useSWR<CustomerType[]>('/api/customers', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <ul>
      {data.map((p) => (
        <Customer key={p.id} customer={p} />
      ))}
    </ul>
  )
}
