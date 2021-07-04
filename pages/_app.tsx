import  {useEffect} from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from 'mobx-react'
import "@/styles/quill.css"


import theme from '../styles/theme';
import RootStoreImp , {RootStore} from "@/mobx-store/RootStore";

interface Props {
    pageProps : any
    Component : any
}

const rootStore = new RootStoreImp()



export default function MyApp(props:Props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
      <>
        <Head>
          <title>Blog</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <Provider rootStore={rootStore}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
      </>
  );
}
