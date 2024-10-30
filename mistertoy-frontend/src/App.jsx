
import { Provider } from 'react-redux'
import { store } from './store/store'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'


function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          //todo add header
            <section className='app'>
              <Routes>
                <Route element={<HomePage/>} path="/"/>
              </Routes>
            </section>
        </Router>
      </Provider >
    </>
  )
}
export default App
