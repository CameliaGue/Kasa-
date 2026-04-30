import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

import Carousel from "../components/Carousel"
import TitleLocation from "../components/TitleLocation"
import Host from "../components/Host"
import Tags from "../components/Tags"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"

export default function Property() {
    const { id } = useParams()

    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.id === id)
                setProperty(found || null)
            })
            .catch(err => {
                console.error("Erreur API :", err)
                setProperty(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <p>Chargement...</p>
    }

    if (!property) {
        return <Navigate to="/404" replace />
    }

    return (
        <main className="property">
            <div className="property-container">

            {/* ================= CAROUSEL ================= */}
            <section className="property-carousel">
                <Carousel pictures={property.pictures || []} />
            </section>

            {/* ================= INFO ================= */}
            <section className="property-info">

                {/* LEFT SIDE */}
                <div className="property-info-left">

                    <TitleLocation
                        title={property.title}
                        location={property.location}
                    />

                    <div className="property-tags">
                        <Tags tags={property.tags || []} />
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="property-info-right">

                    <Host host={property.host} />
                    <Rating rating={property.rating} />

                </div>

            </section>

            {/* ================= COLLAPSES ================= */}
            <section className="property-collapses">

                <div className="property-collapse">
                        <Collapse title="Description">  
                            <p className="property-description">
                                {property.description}
                            </p>
                        </Collapse>
                </div>

                <div className="property-collapse">
                        <Collapse title="Équipements">
                            <div className="property-equipments">
                                {property.equipments.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </Collapse>
                </div>

            </section>

            </div>
        </main>
    )
}