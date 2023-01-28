import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        Build by: <a className="text-decoration-none" href="https://github.com/dariadia/" rel="noreferrer" target="_blank">dariadia</a>{' '}© Jan 2023
        < br/>
        This project on github <a className="text-decoration-none" rel="noreferrer" target="_blank" href="https://github.com/dariadia/dashboard-sample"><FontAwesomeIcon fixedWidth icon={faLink} /></a>
      </div>
      <div className="ms-md-auto">
        Powered by&nbsp;
        <a
          className="text-decoration-none"
          href="https://getbootstrap.com/"
        >
          Bootstrap
        </a>
      </div>
    </footer>
  )
}
