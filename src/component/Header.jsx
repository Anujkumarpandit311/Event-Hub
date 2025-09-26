import { useState } from "react"
import Logo from "../asset/logo.png"
import { Link } from "react-router-dom"
const Header = ({onSearch}) => {
    const [searchText,setSearchText] = useState("")
    console.log("searchtext", searchText)
    let btn = "Login"
    const changeBtnData = () => {
        btn = "Logout"
    }
    return (
    <div className="header-container">
        <img src={Logo} className="Logo-img"/>
            <div className="Search-container">
                <input type="text" placeholder="Search..." className="Search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="Search-btn" onClick={() => onSearch(searchText)}>Search</button>
                
            </div>

        <ul className="header-list">
            <li className="item-list"><Link to={"/"}><i class="fas fa-home"></i> Home</Link></li>
            <li className="item-list"><Link to={"/restaurants"}><i class="fas fa-hotel"></i> Resturantes</Link></li>
            <li className="item-list"><Link to={"/about-us"}><i class="fas fa-user"></i> About us</Link></li>
            <li className="item-list"><Link to={"/contact-us"}><i class="fas fa-phone"></i> Contact</Link></li> 
            <li> <button className="log-btn" onClick={changeBtnData}><i class="fas fa-sign-in-alt"></i>  {btn}</button> </li>
            
        </ul>
    </div>
    )
}

export default Header