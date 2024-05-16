import Nav from './Navigation'

export default function Header () {
    
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light container-fluid'>
            <a class="navbar-brand" href="/">LeVente Berry</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <Nav />
        </nav>
    );
};

 