import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import bannerImg from "../assets/images/banner.jpg"

export default function Home() {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Erreur API :", err)
                setLoading(false)
            })
    }, [])

    return (
        <main>
            <Banner
                image={bannerImg}
                title="Chez vous, partout et ailleurs"
            />

            <section className="cards-container">
                {loading ? (
                    <p>Chargement des logements...</p>
                ) : properties.length > 0 ? (
                    properties.map((property) => (
                        <Card
                            key={property.id}
                            title={property.title}
                            image={property.cover}
                        />
                    ))
                ) : (
                    <p>Aucun logement disponible</p>
                )}
            </section>
        </main>
    )
}