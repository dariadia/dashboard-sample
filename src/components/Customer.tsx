import Link from 'next/link'
import Image from 'next/image'
import type { CustomerType } from '@types'
import { Dropdown, ProgressBar } from 'react-bootstrap'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardIconByType } from '@pages'

type CustomerProps = {
  customer: CustomerType
}

export const CustomerMin: React.FC<CustomerProps> = ({ customer }) => {
  return (
    <li>
      <Link href="/customer/[guid]" as={`/customer/${customer.guid}`}>
        {customer.full_name}
      </Link>
    </li>
  )
}

export const Customer: React.FC<CustomerType> = ({ guid, full_name, avatar, company_name, industry, registered, purchased_total, currency_code, bar_progress, graph_hex, card_type }) => (
    <tr key={guid} className="align-middle">
      <td className="text-center">
        <div className="avatar avatar-md d-inline-flex position-relative">
          <Image
            fill
            className="rounded-circle border border-white"
            src={avatar}
            alt={full_name}
          />
          <span
            className="bottom-0 end-0 rounded-circle"
          />
        </div>
      </td>
      <td>
        <div className="customer-name"><Link href="/customer/[guid]" as={`/customer/${guid}`}>{full_name}</Link></div>
        <div className="small text-white-50">
          Registered: {registered}
        </div>
      </td>
      <td>
        <div className="clearfix mb-2">
          <div className="float-start">
            <div className="fw-semibold">Latest investment: {purchased_total?.toLocaleString()} ({currency_code})</div>
          </div>
        </div>
        <ProgressBar className="progress-thin" style={{ backgroundColor: graph_hex }} now={bar_progress} animated />
      </td>
      <td className="text-center">
        {company_name}
        <br />
        <small className="text-white-50">| {industry}</small>
      </td>
      <td className="text-center">
        <FontAwesomeIcon
          icon={CardIconByType[card_type as keyof typeof CardIconByType] as IconProp}
          size="lg" fixedWidth
        />
      </td>
      <td>
        <Dropdown align="end">
          <Dropdown.Toggle
            as="button"
            bsPrefix="btn"
            className="btn-link rounded-0 shadow-none p-0"
            id="action-user1"
          >
            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alert("This is action 1")}>Info</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("This is action 2")}>Edit</Dropdown.Item>
            <Dropdown.Item
              className="text-danger"
              onClick={() => alert("This is action 3")}
            >
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>)
