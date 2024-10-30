
import { Provider } from 'react-redux'
import { store } from './store/store'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'


function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          //todo add header
            <section className='app'>
              <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/toy" element={<ToyIndex/>} />
              </Routes>
            </section>
        </Router>
      </Provider >
    </>
  )
}
export default App
