"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { montserrat, mulish, syne, cormorant } from "../utils/fonts";

const montserratFont = montserrat.className;
const mulishFont = mulish.className;
const servicesData = [
    {
        title: "WEDDING SHOOT",
        items: [
            "Candid Photography",
            "Pre-Wedding Shoot",
            "Traditional Photography",
            "Bridal/Groom Portraits",
            "Photo Albums and Prints"
        ],
        image: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732558041/Rectangle_4278_tqbxne.jpg", // Replace with actual image URL
        alt: "Wedding Shoot",
    },
    {
        title: "RESTAURANT SHOOT",
        items: [
            "Menu Photography",
            "Interior/Exterior Photography",
            "Social Media Content",
            "Team and Staff Photography",
            "Food Making Videography",
        ],
        image: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732558041/Rectangle_4274_j1pzna.jpg", // Replace with actual image URL
        alt: "Restaurant Shoot",
    },
    {
        title: "CORPORATE SHOOT",
        items: [
            "Advertising Photography",
            "Industrial Photography",
            "Office Culture Photography",
            "Content Creation for Social Media",
            "Training Session Photography",
        ],
        image: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732558041/Rectangle_4275_goexqs.jpg", // Replace with actual image URL
        alt: "Corporate Shoot",
    },
    {
        title: "PRODUCT SHOOT",
        items: [
            "Social Content Creation",
            "Branding and Identity",
            "Video Production (commercials, product demos)",
            "Brand Storytelling",
        ],
        image: "https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732558041/Rectangle_4276_kjyxe7.jpg", // Replace with actual image URL
        alt: "Product Shoot",
    },
];

const Header = () => {
    // State to manage hover
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="header-containers">
                <div className="logo-container">
                    <img
                        src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732472600/b2pzgyd4dfyyl9qmcmzr.png"
                        alt="Evs logo"
                        className="log-styling"
                    />
                </div>
                <ul className="ui-lis-sttylings">
                    <li className={`list-style ${montserratFont}`}>Home</li>
                    <li className={`list-style ${montserratFont}`}>About</li>
                    <li className={`list-style ${montserratFont}`}>Gallery</li>
                    <li
                        className={`list-style ${montserratFont}`}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Services
                        <FontAwesomeIcon
                            icon={isHovered ? faChevronUp : faChevronDown}
                            className="icon-style"
                        />

                    </li>
                    <li className={`list-style ${montserratFont}`}>Contact</li>
                </ul>
            </div>
            {isHovered ? <div className="services-container">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3 className={`service-title ${montserratFont}`}>{service.title}</h3>
                        <hr />
                        <ul className={`service-list ${mulishFont}`}>
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="service-image"
                        />
                    </div>
                ))}
            </div> : null}

        </div>

    );
};

export default Header;
