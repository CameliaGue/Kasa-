import aboutImg from "../assets/images/banner-about.jpg"

const AboutBanner = () => {
    console.log(aboutImg)
    return (
        <div
            className="banner about-banner"
            style={{ backgroundImage: `url(${aboutImg})` }}
        />
    )
}



export default AboutBanner