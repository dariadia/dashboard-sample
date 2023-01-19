import { NextApiResponse, NextApiRequest } from 'next'
import { customers } from '../../../data'
import { Customer } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Customer[]>
) {
  return res.status(200).json(customers)
}
