import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faChevronUp,
  faDroplet,
  faGauge,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import React, {
  PropsWithChildren, useContext, useEffect, useState,
} from 'react'
import {
  Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton,
} from 'react-bootstrap'
import classNames from 'classnames'
import Link from 'next/link'

type AsideNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const AsideNavItem = (props: AsideNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const AsideNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

type AsideNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren

const AsideNavGroupToggle = (props: AsideNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext)
  const {
    eventKey, icon, children, setIsShow,
  } = props

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <Button
      variant="link"
      type="button"
      className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
      {children}
      <div className="nav-chevron ms-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  )
}

type AsideNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
} & PropsWithChildren

const AsideNavGroup = (props: AsideNavGroupProps) => {
  const {
    toggleIcon,
    toggleText,
    children,
  } = props

  const [isShow, setIsShow] = useState(false)

  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <AsideNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</AsideNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">
          {children}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}

export const AsideNav: React.FC = () => {
  return (
    <ul className="list-unstyled">
      <AsideNavItem icon={faGauge} href="/">
        Home
      </AsideNavItem>
      <AsideNavItem icon={faPerson} href="/customers">
        Customers
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </AsideNavItem>
      <AsideNavItem icon={faGauge} href="/stock">
        Stock Trends
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </AsideNavItem>
      <AsideNavTitle>Pages</AsideNavTitle>
      <AsideNavGroup toggleIcon={faStar} toggleText="Open">
        <AsideNavItem icon={faRightToBracket} href="login">Login</AsideNavItem>
        <AsideNavItem icon={faAddressCard} href="register">Register</AsideNavItem>
        <AsideNavItem icon={faBug} href="404">Error 404</AsideNavItem>
        <AsideNavItem icon={faBug} href="500">Error 500</AsideNavItem>
      </AsideNavGroup>
    </ul>
  )
}
