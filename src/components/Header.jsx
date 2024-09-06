import Nav from './Navigation'

export default function Header () {
    
    return (
        <nav className='' id='navbar'>
            <img src="/TM-Logo-50.png" alt="Portfolio Logo"/>
            <a id='nav-title' href="/">LeVente Berry</a>
            <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
            </button>
            <Nav />
        </nav>
    );
}

 