import "./SearchItem.css";
import im from "./img/s1.jpg";
import im1 from "./img/s2.jpg";
import im2 from "./img/s3.jpg";
import im3 from "./img/s4.jpg";
import im4 from "./img/s5.jpg";
import im5 from "./img/s6.jpg";
import { Link } from 'react-router-dom';

const SearchItem = () => {
    return (
        <div className="main">
            <div className="searchItem">
                <img src={im} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice"> Price : 800 Rs</span>
                    <span className="siCap"> Max Capacity : 1 people</span>
                    <span className="siType"> AC Room</span>

                    <span className="siFeatures">
                        Entire Structure  -   1 Sofa  +  1 Single bed
                    </span>
                    <span className="siFood"> Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>

            <div className="searchItem">
                <img src={im1} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice"> Price : 600 Rs</span>
                    <span className="siCap"> Max Capacity :  1 people</span>
                    <span className="siType"> NON - AC Room</span>

                    <span className="siFeatures">
                        Entire Structure - 1 Single bed with Balcony
                    </span>
                    <span className="siFood">Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>

            <div className="searchItem">

                <img src={im2} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice"> Price : 1000 Rs</span>
                    <span className="siCap">Max Capacity : 2 people</span>
                    <span className="siType">AC Room</span>

                    <span className="siFeatures">
                        Entire Structure - Luxury Single Bed with Sofa
                    </span>
                    <span className="siFood">Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>


            <div className="searchItem">

                <img src={im3} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice"> Price : 650 Rs</span>
                    <span className="siCap">Max Capacity : 1 people</span>
                    <span className="siType"> NON - AC Room</span>

                    <span className="siFeatures">
                        Entire Structure -  Only Single Bed
                    </span>
                    <span className="siFood">Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>


            <div className="searchItem">

                <img src={im4} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice">Price : 1000 Rs</span>
                    <span className="siCap">Max Capacity : 2 people</span>
                    <span className="siType">AC Room</span>

                    <span className="siFeatures">
                        Entire Structure -  Only Single Bed
                    </span>
                    <span className="siFood">Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>


            <div className="searchItem">

                <img src={im5} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Single Room</h1>
                    <span className="siPrice">Price : 900 Rs</span>
                    <span className="siCap">Max Capacity : 1 people</span>
                    <span className="siType">NON - AC Room</span>

                    <span className="siFeatures">
                        Entire Structure -  Only Single Bed
                    </span>
                    <span className="siFood">Free Breakfast Included</span>

                </div>
                <br></br>
                <div className="siDetails">
                    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
                </div>
            </div>



        </div>
    )
}

export default SearchItem
