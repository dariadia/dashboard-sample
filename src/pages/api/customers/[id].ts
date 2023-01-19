import { CustomerType, ResponseError } from '@types'
import { NextApiRequest, NextApiResponse } from 'next'
import { CUSTOMERS } from 'src/data/customers'

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerType | ResponseError>
) {
  const { query } = req
  const { id } = query
  const person = CUSTOMERS.find((p) => p.id === id)

  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}
