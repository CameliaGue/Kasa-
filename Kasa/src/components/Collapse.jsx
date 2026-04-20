import { useState } from "react"

const Collapse = ({ title, children }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <span>{open ? "▲" : "▼"}</span>
            </div>

            <div
                className="collapse-content"
                style={{
                    maxHeight: open ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                    padding: open ? "20px" : "0px",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Collapse