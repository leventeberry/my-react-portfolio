import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <div className="d-flex flex-column min-vh-100 container-fluid">
        <Header />
        <main className='container-fluid flex-grow-1'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
