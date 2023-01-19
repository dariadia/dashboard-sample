import { NextApiRequest, NextApiResponse } from 'next'
import { CustomerType, ResponseError } from '@types'
import { CUSTOMERS } from 'src/data/customers'

export default function customerHandler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerType | ResponseError>
) {
  const { query } = req
  const { id } = query
  const customer = CUSTOMERS.find((p) => p.id === id)

  return customer
    ? res.status(200).json(customer)
    : res.status(404).json({ message: `Customer with id: ${id} not found.` })
}
