
const FeedCard = ({ title, image, restaurant }) => {
    return (
        <div className="card-container">
            <img src={image} alt="Card Image" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{restaurant}</h3>
            </div>
        </div>
    )
}

export default FeedCard