import Link from 'next/link'
import { Nav } from 'react-bootstrap'

export const HeaderNav: React.FC = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link className="p-2">Dashboard</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/customers" passHref legacyBehavior>
          <Nav.Link className="p-2">Customers</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link className="p-2">Settings</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  )
}
