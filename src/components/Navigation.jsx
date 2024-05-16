import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;
  
    return (
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className='navbar-nav'>
          <a>
            <Link
              to="/About"
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </a>
          <a>
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </a>
          <a>
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </a>
          <a>
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </a>
        </div>
      </div>
    );
  }