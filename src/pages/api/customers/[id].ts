import { CustomerType, ResponseError } from '@types'
import { NextApiRequest, NextApiResponse } from 'next'
import customers from 'src/data/mock_customers.json'

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerType | ResponseError>
) {
  const { query } = req
  const { id } = query
  const customer = customers.find((p) => p.id === id)

  return customer
    ? res.status(200).json(customer)
    : res.status(404).json({ message: `Customer with id: ${id} not found.` })
}
