const Header = () => {
    return (
        <div>
            <header>
                <nav className={"navbar navbar-dark bg-primary"}>
                    <a href="/">Facturas</a>
                    <a href="/">Productos</a>
                    <a href="/clientes">Clienes</a>
                    <a href="/">Salir</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;