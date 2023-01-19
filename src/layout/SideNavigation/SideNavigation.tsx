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
  faChevronUp, faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
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
        Dashboard
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </AsideNavItem>
      <AsideNavItem icon={faCode} href="/customers">
        Sample
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </AsideNavItem>
      <AsideNavTitle>Theme</AsideNavTitle>
      <AsideNavItem icon={faDroplet} href="colors.html">Colors</AsideNavItem>
      <AsideNavItem icon={faPencil} href="typography.html">Typography</AsideNavItem>
      <AsideNavTitle>Components</AsideNavTitle>

      <AsideNavGroup toggleIcon={faPuzzlePiece} toggleText="Base">
        <AsideNavItem href="base/accordion.html">Accordion</AsideNavItem>
        <AsideNavItem href="base/breadcrumb.html">Breadcrumb</AsideNavItem>
        <AsideNavItem href="base/cards.html">Cards</AsideNavItem>
        <AsideNavItem href="base/carousel.html">Carousel</AsideNavItem>
        <AsideNavItem href="base/collapse.html">Collapse</AsideNavItem>
        <AsideNavItem href="base/list-group.html">List group</AsideNavItem>
        <AsideNavItem href="base/navs.html">Navs</AsideNavItem>
        <AsideNavItem href="base/pagination.html">Pagination</AsideNavItem>
        <AsideNavItem href="base/popovers.html">Popovers</AsideNavItem>
        <AsideNavItem href="base/progress.html">Progress</AsideNavItem>
        <AsideNavItem href="base/scrollspy.html">Scrollspy</AsideNavItem>
        <AsideNavItem href="base/spinners.html">Spinners</AsideNavItem>
        <AsideNavItem href="base/tables.html">Tables</AsideNavItem>
        <AsideNavItem href="base/tabs.html">Tabs</AsideNavItem>
        <AsideNavItem href="base/tooltips.html">Tooltips</AsideNavItem>
      </AsideNavGroup>

      <AsideNavGroup toggleIcon={faLocationArrow} toggleText="Buttons">
        <AsideNavItem href="buttons/buttons.html">Buttons</AsideNavItem>
        <AsideNavItem href="buttons/button-group.html">Buttons Group</AsideNavItem>
        <AsideNavItem href="buttons/dropdowns.html">Dropdowns</AsideNavItem>
      </AsideNavGroup>

      <AsideNavItem icon={faChartPie} href="charts.html">Charts</AsideNavItem>

      <AsideNavGroup toggleIcon={faFileLines} toggleText="Forms">
        <AsideNavItem href="forms/form-control.html">Form Control</AsideNavItem>
        <AsideNavItem href="forms/select.html">Select</AsideNavItem>
        <AsideNavItem href="forms/checks-radios.html">Checks and radios</AsideNavItem>
        <AsideNavItem href="forms/range.html">Range</AsideNavItem>
        <AsideNavItem href="forms/input-group.html">Input group</AsideNavItem>
        <AsideNavItem href="forms/floating-labels.html">Floating labels</AsideNavItem>
        <AsideNavItem href="forms/layout.html">Layout</AsideNavItem>
        <AsideNavItem href="forms/validation.html">Validation</AsideNavItem>
      </AsideNavGroup>
      <AsideNavGroup toggleIcon={faBell} toggleText="Notifications">
        <AsideNavItem href="notifications/alerts.html">Alerts</AsideNavItem>
        <AsideNavItem href="notifications/badge.html">Badge</AsideNavItem>
        <AsideNavItem href="notifications/modals.html">Modals</AsideNavItem>
        <AsideNavItem href="notifications/toasts.html">Toasts</AsideNavItem>
      </AsideNavGroup>

      <AsideNavItem icon={faCalculator} href="widgets.html">
        Widgets
        <small className="ms-auto"><Badge bg="info">NEW</Badge></small>
      </AsideNavItem>
      <AsideNavTitle>Extras</AsideNavTitle>
      <AsideNavGroup toggleIcon={faStar} toggleText="Pages">
        <AsideNavItem icon={faRightToBracket} href="login">Login</AsideNavItem>
        <AsideNavItem icon={faAddressCard} href="register">Register</AsideNavItem>
        <AsideNavItem icon={faBug} href="404.html">Error 404</AsideNavItem>
        <AsideNavItem icon={faBug} href="500.html">Error 500</AsideNavItem>
      </AsideNavGroup>
    </ul>
  )
}
