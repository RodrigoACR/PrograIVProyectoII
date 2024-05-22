const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div className="container-fluid d-flex flex-column flex-md-row">
                        <a className="navbar-brand" href="/main">Inicio</a>
                        <div className={"navbar-collapse collapse show"}>
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/facturas">Facturas
                                        <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/clientes">Clientes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/productos">Productos</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <h4 className={"text-white fw-bold me-4"}>Bienvenido Usuario!</h4>
                                <a className="btn btn-secondary my-2 my-sm-0" href="/">Salir</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;