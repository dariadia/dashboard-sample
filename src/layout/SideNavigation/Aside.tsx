import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { AsideNav } from './SideNavigation'

export const Aside: React.FC<{ isAsideShown: boolean; showAside: Dispatch<SetStateAction<boolean>> }> = (props) => {
  const { isAsideShown, showAside } = props

  return (
    <div
      className={classNames('aside d-flex flex-column position-fixed h-100', {
        show: isAsideShown,
        'md-hide': !isAsideShown,
      })}
      id="aside"
    >
      <div className="aside-nav flex-fill">
        <AsideNav />
      </div>
      <Button
        variant="link"
        className="aside-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none"
        // @ts-ignore
        onClick={showAside}
        type="button"
        aria-label="aside toggler"
      >
        <FontAwesomeIcon className="aside-toggler-chevron" icon={faAngleLeft} fontSize={24} />
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
      className={classNames('aside-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50', {
        'd-none': !isShownAside,
      })}
      onClick={toggleAside}
    />
  )
}
