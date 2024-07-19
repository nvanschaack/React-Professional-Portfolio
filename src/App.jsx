import NavBarEl from './components/NavBar'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'


function App() {
  const currentPage = useLocation().pathname

  return (
    <div >
      <NavBarEl currentPage={currentPage} />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  
  )
}

export default App
