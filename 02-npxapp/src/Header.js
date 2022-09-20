import './Header.css';

function Header(props) {
    return (
        <header id="myHeader" class="header">
            <h2>Club Video Color</h2>
            <nav key="navbar" className="topnav">
                <a href="./sobreNosotros.html">Sobre Nosotros</a>
                <a class="active" href="./peliculas.html">Películas</a>
                <a href="./videoclub.html">Inicio</a>
            </nav>
        </header>
    )
};

export default Header;