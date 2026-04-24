import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import aboutData from "../data/data.about.json"
import aboutImg from "../assets/images/banner-about.jpg"

export default function About() {
    return (
        <main>
            <Banner image={aboutImg} />

            <div className="about-collapses">
                {aboutData.map((item, index) => (
                    <Collapse key={index} title={item.title}>
                        {item.description}
                    </Collapse>
                ))}
            </div>
        </main>
    )
}