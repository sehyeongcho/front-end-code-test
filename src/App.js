import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import MainPage from './pages/MainPage'
import NavigationBar from './components/NavigationBar'

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App