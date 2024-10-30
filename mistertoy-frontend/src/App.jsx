
import { Provider } from 'react-redux'
import { store } from './store/store'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'

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
                <Route path="/toy/:toyId" element={<ToyDetails/>} />
                <Route path="/toy/edit" element={<ToyEdit/>} />
                <Route path="/toy/edit/:toyId" element={<ToyEdit/>} />
              </Routes>
            </section>
        </Router>
      </Provider >
    </>
  )
}
export default App
