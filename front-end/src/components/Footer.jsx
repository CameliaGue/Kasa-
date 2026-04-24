import logo from "../assets/icons/logo-white.png"

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa logo" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}