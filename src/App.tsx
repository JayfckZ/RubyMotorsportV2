import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import { GlobalStyle } from './global'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<h1>Nova pag</h1>} />
          <Route path="/helloworld" element={<h1>Hello World!</h1>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
