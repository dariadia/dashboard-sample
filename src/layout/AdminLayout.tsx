import React, {
  PropsWithChildren, useState,
} from 'react'
import Head from 'next/head'
import { Footer, Header, Aside, AsideOverlay } from '@layout'
import { Container } from 'react-bootstrap'

export const AdminLayout = ({ children }: PropsWithChildren) => {
  const [isShownAside, setShownAside] = useState(false)
  const toggleisShownAside = () => {
    setShownAside(!isShownAside)
  }
  return (
    <>
      <Head>
        <title>Dashboard by Daria</title>
        <meta name="description" content="Sample app dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside isAsideShown={isShownAside} showAside={setShownAside} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-dark">
        <Header toggleAside={toggleisShownAside} />
        <div className="body flex-grow-1 px-3">
          <Container fluid="lg">
            {children}
          </Container>
        </div>
        <Footer />
      </div>
      <AsideOverlay isShownAside={isShownAside} toggleAside={toggleisShownAside} />
    </>
  )
}
