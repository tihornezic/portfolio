import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Indicators from '../components/Indicators'
import SideIcons from '../components/SideIcons'
import ScrollDown from '../components/ScrollDown'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'
import ProjectThree from '../components/ProjectThree'
import ContactMe from '../components/ContactMe'
import {useState, useEffect, useCallback, useRef, useMemo} from 'react'

export default function Index() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectOneRef = useRef(null)
  const projectTwoRef = useRef(null)
  const projectThreeRef = useRef(null)
  const contactMeRef = useRef(null)

  const [homeIsVisible, setHomeIsVisible] = useState(false)
  const [aboutIsVisible, setAboutIsVisible] = useState(false)

  const [projectOneIsVisible, setProjectOneIsVisible] = useState(false)
  const [projectTwoIsVisible, setProjectTwoIsVisible] = useState(false)
  const [projectThreeIsVisible, setProjectThreeIsVisible] = useState(false)

  const [contactMeIsVisible, setContactMeIsVisible] = useState(false)

  const callbackFunction = entries => {
    // const [entry] = entries // const entry = entries[0]
    const entry = entries[0]

    // console.log(entry)
    // console.log(entry.target.className)

    if (entry.target.className === 'one') {
      setHomeIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'two') {
      setAboutIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'three') {
      setProjectOneIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'four') {
      setProjectTwoIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'five') {
      setProjectThreeIsVisible(entry.isIntersecting)
    }

    if (entry.target.className === 'six') {
      setContactMeIsVisible(entry.isIntersecting)
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
    const aboutTarget = aboutRef.current
    const projectOneTarget = projectOneRef.current
    const projectTwoTarget = projectTwoRef.current
    const projectThreeTarget = projectThreeRef.current
    const contactMeTarget = contactMeRef.current

    if (homeTarget) observer.observe(homeTarget)
    if (aboutTarget) observer.observe(aboutTarget)

    if (projectOneTarget) observer.observe(projectOneTarget)
    if (projectTwoTarget) observer.observe(projectTwoTarget)
    if (projectThreeTarget) observer.observe(projectThreeTarget)

    if (contactMeTarget) observer.observe(contactMeTarget)

    return () => {
      if (homeTarget) observer.unobserve(homeTarget)
      if (aboutTarget) observer.unobserve(aboutTarget)

      if (projectOneTarget) observer.unobserve(projectOneTarget)
      if (projectTwoTarget) observer.unobserve(projectTwoTarget)
      if (projectThreeTarget) observer.unobserve(projectThreeTarget)

      if (contactMeTarget) observer.unobserve(contactMeTarget)
    }
  }, [homeRef, aboutRef, projectOneRef, projectTwoRef, projectThreeRef, contactMeRef, options])

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='' />
        <meta name='description' content='' />
        <meta charSet='utf-8' />
        {/* <link rel='stylesheet' href='/src/font/stylesheet.css' type='text/css' charset='utf-8'></link> */}
        <link 
          rel="preload"
          href="/font/Nexa-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link 
          rel="preload"
          href="/font/Nexa-Light.otf"
          as="font"
          crossOrigin=""
        />
        <title>Tihor Nezić - Frontend Web Dev</title>
      </Head>

      {/* <Navbar /> */}
      {/* <Home /> */}

      <div className='fullWrapper'>
        <Navbar
          homeIsVisible={homeIsVisible}
          aboutIsVisible={aboutIsVisible}
          projectOneIsVisible={projectOneIsVisible}
          projectTwoIsVisible={projectTwoIsVisible}
          projectThreeIsVisible={projectThreeIsVisible}
          contactMeIsVisible={contactMeIsVisible}
        />

        <Indicators
          homeIsVisible={homeIsVisible}
          aboutIsVisible={aboutIsVisible}
          projectOneIsVisible={projectOneIsVisible}
          projectTwoIsVisible={projectTwoIsVisible}
          projectThreeIsVisible={projectThreeIsVisible}
          contactMeIsVisible={contactMeIsVisible}
        />

        {<SideIcons
          projectOneIsVisible={projectOneIsVisible}
          projectTwoIsVisible={projectTwoIsVisible}
          projectThreeIsVisible={projectThreeIsVisible}
        />}

        {/* <h1 className='header'>{!homeIsVisible ? 'home not in viewport' : 'home in viewport'}</h1> */}
        {/* <h1 className='header2'>{!aboutIsVisible ? 'about not in viewport' : 'about in viewport'}</h1> */}

        <section className='one' ref={homeRef}>
          <Home />
          <ScrollDown />
        </section>

        <section className='two' ref={aboutRef}>
          <About />
        </section>

        <section className='three' ref={projectOneRef}>
          <ProjectOne />
        </section>

        <section className='four' ref={projectTwoRef}>
          <ProjectTwo />
        </section>

        <section className='five' ref={projectThreeRef}>
          <ProjectThree />
        </section>

        <section className='six' ref={contactMeRef}>
          <ContactMe />
        </section>
      </div>

    </div>
  )
}
