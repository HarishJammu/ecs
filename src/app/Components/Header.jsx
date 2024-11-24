import Image from 'next/image'; // Optional: use Next.js Image component for optimization


import "./Header.css"
import { montserrat } from "../utils/fonts"
const ListFont = montserrat.className
const Header = () => {
    return (
        <div className="header-containers">
            <div className='logo-container'>
                <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732472600/b2pzgyd4dfyyl9qmcmzr.png"
                 alt="Evs logo" className="log-styling" />
            </div>
            <ul className="ui-lis-sttylings">
                <li className={`list-style ${ListFont}`}>Home </li>
                <li className={`list-style ${ListFont}`}>About </li>
                <li className={`list-style ${ListFont}`}>Gallery</li>
                <li className={`list-style ${ListFont}`}>Services</li>
                <li className={`list-style ${ListFont}`}>Contact</li>
            </ul>
        </div >
    )

}
export default Header;