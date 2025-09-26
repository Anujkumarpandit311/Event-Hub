import { useEffect, useState } from "react"
import Loader from "../component/Loader"
import Header from "../component/Header"
import FeedCard from "../component/FeedCard"
import { result } from "../utils/mockdata"
import Footer from "../component/Footer"
import useOnlineStatus from "../hooks/useOnlineStatus"

const Home = () => {
    let data = result
    const [post, setPost] = useState([])
    useEffect(() => {

        fetchData()
        console.log("fisrt render")
    }, [])
    const status = useOnlineStatus()
    console.log("status", status)
    const fetchData = async () => {
        const data = await fetch("http://108.174.58.176:4000/get-feed")
        const result = await data.json()
        if (result.code === 200 && result.data) {
            setPost(result.data.data)
        }
        console.log("result", result)
    }
    const onSearch = (searchText) => {
        console.log("searchText123", searchText)
        let data = result.filter((item) => item.restaurantName.toLowerCase().startsWith(searchText.toLowerCase()))
        setPost([...data])
    }
    return (
        <div>
            {
                post.length === 0 ? <Loader /> :
                    <>
                        {/* <Header onSearch={onSearch} /> */}

                        <div className="main-container">
                            {
                                post.map((item) => {
                                    return <FeedCard title={item.title} image={item.profilePicture} restaurant={item.restaurantName} />

                                })
                            }

                        </div>
                        {/* <Footer /> */}
                    </>
            }

        </div>
    )
}

export default Home