import Nav from './Navigation'

export default function Header () {
    
    return (
        <nav className='navbar navbar-expand-lg d-flex' id='navbar'>
            <img src="/TM-Logo-50.png" alt="Portfolio Logo"/>
            <a id='nav-title' href="/Home">LeVente Berry</a>
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav />
        </nav>
    );
};

 