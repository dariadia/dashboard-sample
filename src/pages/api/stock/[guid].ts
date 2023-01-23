import { GraphItem, ResponseError } from '@types'
import { NextApiRequest, NextApiResponse } from 'next'
import stock from 'src/data/mock_stock_1.json'

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<GraphItem | ResponseError>
) {
  const { query } = req
  const { guid } = query
  const graphItem = stock.find((p) => p.guid === guid)

  return graphItem
    ? res.status(200).json(graphItem)
    : res.status(404).json({ message: `Stock date with guid: ${guid} not found.` })
}
