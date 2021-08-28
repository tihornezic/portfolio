import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import {useState, useEffect, useCallback, useRef} from 'react'

export default function Index() {

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='' />
        <meta name='description' content='' />
        <meta charSet='utf-8' />
        {/* <link rel='stylesheet' href='../font/stylesheet.css' type='text/css' charset='utf-8'></link> */}
        <title>Tihor Nezić - Frontend Web Dev</title>
      </Head>

      <Navbar />
      <Home />

    </div>
  )
}
