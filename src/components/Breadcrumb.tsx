import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap'

export const Breadcrumb = () => {
  return (
    <BootstrapBreadcrumb listProps={{ className: 'my-0 ms-2 align-items-center' }}>
      <BootstrapBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Home
      </BootstrapBreadcrumb.Item>
      <BootstrapBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Clients
      </BootstrapBreadcrumb.Item>
      <BootstrapBreadcrumb.Item active>Q1</BootstrapBreadcrumb.Item>
    </BootstrapBreadcrumb>
  )
}
