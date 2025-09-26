import React, { useEffect, useState } from "react"
import Loader from "../component/Loader"
import FeedCard from "../component/FeedCard"
import Header from "../component/Header"
import RestaurantCard from "../component/RestaurantCard"
import { useNavigate } from "react-router-dom"




const Restaurant = () => {

    const [restaurantList, setRestaurantList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        const data = await fetch("http://108.174.58.176:4000/get-all-restaurants")
        const result = await data.json()
        console.log("result", result)
        if (result.code === 200 && result.data) {
            setRestaurantList(result.data.rows)
            
        }
    }
    const onCardClick = (restaurantId) => {
        console.log("RestaurantId",restaurantId)
        navigate(`/restaurant-detail/${restaurantId}`)
    }
    console.log("=======>>>", restaurantList)
    return (
        <div>
            {
                restaurantList.length === 0 ? <Loader /> :
                    <>
                        {/* <Header onSearch={onSearch} /> */}
                        <div className="main-container">
                            {
                                restaurantList.map((item) => {
                                    return <RestaurantCard
                                        onCardClick = {onCardClick}
                                        id = {item.id}
                                        title={item.name}
                                        image={item.profileImage}
                                        restaurant={item.name}
                                        description={item.description}
                                        address={item.address}
                                        amenities={item.amenities}
                                    />

                                })
                            }

                        </div>
                    </>
            }
        </div>
    )
}

export default Restaurant