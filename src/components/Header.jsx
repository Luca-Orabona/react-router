import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="container py-3">
            <nav className="d-flex justify-content-between">

                <ul className="d-flex gap-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chiSiamo">Chi siamo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/listaPost" end>Lista post</NavLink>
                    </li>
                      <li>
                        <NavLink to="/listaPost/create">Crea post</NavLink>
                    </li>
                </ul>


                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>


            </nav>
        </header>
    )
}

export default Header;