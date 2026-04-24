import { NavLink } from "react-router-dom"
import logo from "../assets/icons/logo.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa logo" className="logo" />

            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}