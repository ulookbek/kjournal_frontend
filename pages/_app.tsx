import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import Header from '../components/Header'
import React from 'react'
import './index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
