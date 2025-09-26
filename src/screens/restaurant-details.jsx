import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantDetailScreen = () => {
  const [restaurantData, setRestaurantData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(`http://108.174.58.176:4000/get-restaurant-details?restaurantId=${id}`)
    const result = await data.json()
    console.log("result", result)
    if (result.code === 200 && result.data) {
      setRestaurantData(result.data)

      console.log("result ===>", result.data)
    }
  }
  return (
    <div className="restaurant-container">
      <div className="restaurant-header" >
        <img
          src={restaurantData.profileImage}
          alt={restaurantData.name}
          className="restaurant-img"
        />
        <div className="restaurant-info">
          <h1>{restaurantData.name}</h1>
          <p>{restaurantData.address}</p>
        </div>
      </div >
      <p className="restaurant-description">{restaurantData.description}</p>

      <div className="restaurant-amenities">
        <h2>Amenities</h2>
        <ul>
          {restaurantData.amenities && restaurantData.amenities.map((amenity, index) => (
            <li key={index}> <strong>{amenity.name}:</strong> {amenity.value}</li>
          ))}
        </ul>
      </div>
      <div className="accordion">
        <div className="accordion-heading" onClick={() => setIsOpen(!isOpen)}>
          <p>Welcome Drink</p>
        </div>
        {
          isOpen && (
            <div className="accordion-content">
              <p>Blue Lagoon</p>
            </div>
          )
        }
      </div>
      {
        restaurantData.discountPercent > 0 && (
          <div className="restaurant-discount">
            <p>
              <strong>Special Discount: {restaurantData.discountPercent}% OFF</strong>
            </p>
          </div>
        )
      }

      <div className="restaurant-rating">
        <p>Average Rating: {restaurantData.avg_rating || "Not Rated Yet"}</p>
      </div>

      {
        restaurantData.event && (
          <div className="restaurant-event">
            <h3>Event Details</h3>
            <p>{restaurantData.eventDescription || "No events available at the moment."}</p>
          </div>
        )
      }

    </div>
  )
}

export default RestaurantDetailScreen

