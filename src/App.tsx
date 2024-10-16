import Hero from './containers/Hero'
import Main from './containers/Main'
import NavigationBar from './containers/NavigationBar'
import { GlobalStyle } from './global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <NavigationBar />
      <Main />
    </>
  )
}

export default App
