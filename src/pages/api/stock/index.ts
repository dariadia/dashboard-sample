import { GraphItem } from '@types'
import { NextApiResponse, NextApiRequest } from 'next'
import stockCompanyOne from 'src/data/mock_stock_1.json'
import stockCompanyTwo from 'src/data/mock_stock_2.json'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GraphItem[]>
) {
  const { page = 0, per_page = 24, company = "1" } = _req?.query
  const startIndex = Number(page) * Number(per_page)
  const stock = company === "1" ? stockCompanyOne : stockCompanyTwo
  return res.status(200).json(stock.slice(startIndex, startIndex + Number(per_page)))
}
