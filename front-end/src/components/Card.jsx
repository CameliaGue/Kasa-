import { Link } from "react-router-dom"

const Card = ({ title, image, id }) => {
    return (
        <Link to={`/property/${id}`} className="card">
                <img src={image} alt={title} />
                <div className="card-overlay">
                    <h2>{title}</h2>
                </div>
        </Link>
    )
}

export default Card