import starActive from "../assets/images/star-active.png"
import starInactive from "../assets/images/star-inactive.png"

export default function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {stars.map((i) => (
                <img
                    key={i}
                    src={i <= rating ? starActive : starInactive}
                    alt="star"
                    className="star"
                />
            ))}
        </div>
    )
}