import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from '../containers/Hero'
import Main from '../containers/Main'
import NavigationBar from '../containers/NavigationBar'

const Home = () => {
  return (
    <>
      <Hero />
      <NavigationBar />
      <Main />
    </>
  )
}

export default Home
