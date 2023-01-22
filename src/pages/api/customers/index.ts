import { CustomerType } from '@types'
import { NextApiResponse, NextApiRequest } from 'next'
import customers from 'src/data/mock_customers.json'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CustomerType[]>
) {
  const { page = 0, per_page = 20 } = _req?.query
  const startIndex = Number(page) * Number(per_page)
  return res.status(200).json(customers.slice(startIndex, startIndex + Number(per_page)))
}
