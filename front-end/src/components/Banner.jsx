const Banner = ({ image, title }) => {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="overlay"></div>
            {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner