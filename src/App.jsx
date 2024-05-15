import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main className='container-fluid'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
