import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;
  
    return (
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className='navbar-nav ms-3'>
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </div>
      </div>
    );
  }