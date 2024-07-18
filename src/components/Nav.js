import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <ul className="holder">
                <li to='/'><Link>Home</Link></li>
                <li to='/nosotros'><Link>Nosotros</Link></li>
                <li to='/servicios'><Link>Servicios</Link></li>
                <li to='/contacto'><Link>Contacto</Link></li>

            </ul>
        </nav>
    )
}

export default Nav;