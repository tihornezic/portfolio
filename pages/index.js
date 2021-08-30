import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Indicators from '../components/Indicators'
import SideIcons from '../components/SideIcons'
import ScrollDown from '../components/ScrollDown'
import {useState, useEffect, useCallback, useRef, useMemo} from 'react'

export default function Index() {

  const targetRef = useRef(null)
  const homeRef = useRef(null)

  const [homeIsVisible, setHomeIsVisible] = useState(false)
  const [aboutIsVisible, setAboutIsVisible] = useState(false)

  const callbackFunction = entries => {
    // const [entry] = entries // const entry = entries[0]
    const entry = entries[0]

    console.log(entry)

    // console.log(entry.target.className)

    if (entry.target.className === 'one') {
      console.log('lmao')
      setHomeIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'two') {
      console.log('lol')
      setAboutIsVisible(entry.isIntersecting)
    }
  }

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)

    const homeTarget = homeRef.current
    const currentTarget = targetRef.current

    if (homeTarget) observer.observe(homeTarget)
    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (homeTarget) observer.unobserve(homeTarget)
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [homeRef, targetRef, options])

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

      {/* <Navbar /> */}
      {/* <Home /> */}

      <div className='fullWrapper'>
        <Navbar
          homeIsVisible={homeIsVisible}
          aboutIsVisible={aboutIsVisible}
        />

        <Indicators
          homeIsVisible={homeIsVisible}
          aboutIsVisible={aboutIsVisible}
        />

        <SideIcons />

        <h1 className='header'>{!homeIsVisible ? 'home not in viewport' : 'home in viewport'}</h1>
        <h1 className='header2'>{!aboutIsVisible ? 'about not in viewport' : 'about in viewport'}</h1>

        <section className='one' ref={homeRef}>
          <Home />
          <ScrollDown />
        </section>

        <section className='two' ref={targetRef}>
          <About />
        </section>
      </div>

    </div>
  )
}
