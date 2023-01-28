import {
  Badge, Dropdown, Nav, NavItem,
} from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { PropsWithChildren } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGear, faListCheck, faLock, faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { PERSONS } from 'src/data/persons'

type NavItemProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ProfileDropdownItem = (props: NavItemProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export const HeaderProfileNav: React.FC = () => {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="shadow-none" className="py-0 px-2 bg-dark rounded-0" id="dropdown-profile">
          <div className="avatar position-relative">
            <Image
              fill
              className="rounded-circle"
              src={PERSONS[0]}
              alt="YourName avatar"
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0 bg-complementary">
          <Dropdown.Header className="bg-dark fw-bold">Account</Dropdown.Header>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faBell}>
                Updates
                <Badge bg="info" className="ms-2">1</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faEnvelopeOpen}>
                Mail
                <Badge bg="success" className="ms-2">2</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faListCheck}>
                Tasks
                <Badge bg="danger" className="ms-2">3</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faMessage}>
                Messages
                <Badge bg="warning" className="ms-2">4</Badge>
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Dropdown.Header className="bg-dark fw-bold">Settings</Dropdown.Header>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faUser}>Profile</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faGear}>Settings</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faCreditCard}>Payments</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faFile}>Projects</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Dropdown.Header className="bg-dark fw-bold"></Dropdown.Header>
          <Link href="/login" passHref legacyBehavior>
            <Dropdown.Item className="bg-complementary text-white">
              <ProfileDropdownItem icon={faPowerOff}>Logout</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}
