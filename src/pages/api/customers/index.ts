import { CustomerType } from '@types'
import { NextApiResponse, NextApiRequest } from 'next'
import { CUSTOMERS } from 'src/data/customers'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CustomerType[]>
) {
  return res.status(200).json(CUSTOMERS)
}
