import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { AsideNav } from './SideNavigation'

export const Aside: React.FC<{ isAsideShown: boolean; showAside: () => void }> = (props) => {
  const { isAsideShown, showAside } = props

  return (
    <div
      className={classNames('Aside d-flex flex-column position-fixed h-100', {
        show: isAsideShown,
        'md-hide': !isAsideShown,
      })}
      id="Aside"
    >
      <div className="Aside-nav flex-fill">
        <AsideNav />
      </div>
      <Button
        variant="link"
        className="Aside-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none"
        onClick={showAside}
        type="button"
        aria-label="Aside toggler"
      >
        <FontAwesomeIcon className="Aside-toggler-chevron" icon={faAngleLeft} fontSize={24} />
      </Button>
    </div>
  )
}

export const AsideOverlay = (props: { isShownAside: boolean; toggleAside: () => void }) => {
  const { isShownAside, toggleAside } = props

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames('Aside-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50', {
        'd-none': !isShownAside,
      })}
      onClick={toggleAside}
    />
  )
}
