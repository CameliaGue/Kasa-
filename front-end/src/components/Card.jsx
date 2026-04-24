const Card = ({ title, image }) => {
    return (
        <article className="card">
            <img src={image} alt={title} />
            <div className="card-overlay">
                <h2>{title}</h2>
            </div>
        </article>
    )
}

export default Card