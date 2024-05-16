import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center vh-100">
        <Header />
        <main className='h-100'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
