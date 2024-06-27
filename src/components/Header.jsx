import Nav from './Navigation'

export default function Header () {
    
    return (
        <nav className='navbar navbar-expand-lg' id='navbar'>
            <a className="navbar-brand" id='nav-title' href="/">LeVente Berry</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav />
        </nav>
    );
};

 