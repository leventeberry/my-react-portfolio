import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Header />
      <main className='d-flex container flex-grow-1'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
