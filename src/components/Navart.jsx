import React from 'react'
import '../../styles/Navart.css'

const Navart = () => {
    return (
        <div className="containe">
            <div className="item">
                <div className="callButton">
                    {/* <Image src='/img/telephone.png' alt='telefonno' width={32} height={32} /> */}
                    <img src="" alt="img" />
                </div>
                <div className="texts">
                    <div className="text">ORDER NOW!</div>
                    <div className="text">234 858 389</div>
                </div>
            </div>
            <div className="item">
                <ul className="list">
                    <li className="listItem">Homepage</li>
                    <li className="listItem">Products</li>
                    <li className="listItem">Menu</li>
                    {/* <Image src='/img/La pizzeria.svg' alt='' width={90} height={90} /> */}
                    <img src="" alt="img" />
                    <li className="listItem">Events</li>
                    <li className="listItem">Blog</li>
                    <li className="listItem">Contact</li>
                </ul>
            </div>
            <div className="item">
                <div className="cart">
                    {/* <Image src='/img/pizzacart.svg' alt='' width={45} height={45} /> */}
                    <img src="" alt="img" />
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navart
