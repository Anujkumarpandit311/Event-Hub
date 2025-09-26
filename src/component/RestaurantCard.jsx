import React from "react";

const RestaurantCard = ({ image, title,  address, description, amenities, id, onCardClick}) => {
  return (
    <div onClick={() => onCardClick(id)} className="restaurant-card">
      <img src={image} alt={title} className="restaurant-image"/>
      <div className="restaurant-name">{title}</div>
      <p className="restaurant-address">{address}</p>
      <p className="restaurant-description">{description}</p>
      <h3 className="restaurant-title">Amenity</h3>
      <ul>
        {amenities.map((amenity) => (
          <li key={amenity.id} className="restaurant-amentityItem">
            <strong>{amenity.name}:</strong> {amenity.value}
          </li>
        ))}
      </ul>
    </div>

  )
  
}
export default RestaurantCard



