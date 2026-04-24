import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <main className="notfound">
            <h1>404</h1>

            <p>Oups ! La page que vous demandez n’existe pas.</p>

            <Link to="/" className="notfound-link">
                Retourner sur la page d’accueil
            </Link>
        </main>
    )
}