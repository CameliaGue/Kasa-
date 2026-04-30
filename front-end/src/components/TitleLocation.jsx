export default function TitleLocation({ title, location }) {
    return (
        <div className="title-location">
            <h1 className="title-location-title">{title}</h1>
            <p className="title-location-location">{location}</p>
        </div>
    )
}