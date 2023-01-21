export type CustomerType = {
  guid: string,
  full_name: string,
  email: string,
  avatar: string,
  card_type: string,
  purchased_total: string,
  currency_code: string
  company_name: string
  registered: string
  industry: string
  graph_hex: string
  bar_progress: number
}


export type ResponseError = {
  message: string
}
