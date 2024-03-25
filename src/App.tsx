import { Route, Routes } from 'react-router-dom'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import Client from './pages/Client'
import Detail from './pages/Detail'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LayoutWebsite/>}>
          <Route index element={<Client/>}/>
          <Route path='/detail' element={<Detail/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
