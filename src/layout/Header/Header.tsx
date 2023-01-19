import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Breadcrumb } from '@components'
import { HeaderProfileNav, HeaderNav } from '@layout'
import { Button, Container } from 'react-bootstrap'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Nav } from 'react-bootstrap'

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { toggleSidebar, toggleSidebarMd } = props

  return (
    <header className="header sticky-top mb-4 p-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <div className="header-nav d-none d-md-flex">
          <HeaderNav />
        </div>
        <div className="header-nav ms-auto">
        <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
      <div className="header-divider border-top my-2 ms-n2 me-n2" />
      <Container fluid>
        <Breadcrumb />
      </Container>
    </header>
  )
}
