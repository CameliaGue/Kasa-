import { useState } from "react"
import arrow from "../assets/images/arrow-carousel.png"

export default function Carousel({ pictures }) {
    const [index, setIndex] = useState(0)

    if (!pictures || pictures.length === 0) return null

    const next = () => {
        setIndex((prev) => (prev + 1) % pictures.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + pictures.length) % pictures.length)
    }

    return (
        <div className="carousel">

            {/* IMAGE */}
            <img
                src={pictures[index]}
                alt="logement"
                className="carousel-image"
            />

            {/* FLECHES */}
            {pictures.length > 1 && (
                <>
                    <img
                        src={arrow}
                        alt="previous"
                        className="carousel-arrow left"
                        onClick={prev}
                    />

                    <img
                        src={arrow}
                        alt="next"
                        className="carousel-arrow right"
                        onClick={next}
                    />
                </>
            )}

            {/* COMPTEUR */}
            {pictures.length > 1 && (
                <div className="carousel-counter">
                    {index + 1} / {pictures.length}
                </div>
            )}

        </div>
    )
}