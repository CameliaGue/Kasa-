import { useState } from "react"
import arrow from "../assets/images/arrow.png"

const Collapse = ({ title, children }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse">
            <div
                className="collapse-header"
                onClick={() => setOpen(!open)}
            >
                <h3>{title}</h3>

                <img
                    src={arrow}
                    alt="toggle"
                    className={`collapse-arrow ${open ? "open" : ""}`}
                />
            </div>

            <div className={`collapse-content ${open ? "open" : ""}`}>
                <div className="collapse-inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapse