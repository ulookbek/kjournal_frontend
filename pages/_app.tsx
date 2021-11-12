import Head from "next/head";
import {CssBaseline} from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>KJournal</title>
          <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
          <CssBaseline />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
