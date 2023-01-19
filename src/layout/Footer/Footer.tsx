import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        Build by: <a className="text-decoration-none" href="https://github.com/dariadia/">dariadia</a>{' '}© Jan 2023
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
