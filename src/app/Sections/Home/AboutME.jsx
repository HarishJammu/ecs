import Image from 'next/image';
import "./Intro.css"

export default function AboutMe() {
    return (
        <div className="container">
            <div className="imageSection">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732907633/1304_vkalo9.jpg"
                    alt="Photographer at Sunset"
                    className="image"
                    layout="responsive"
                    width={10}
                    height={10}
                />
            </div>
            <div className="textSection">
                <div className="aboutMe">
                    <h2>ABOUT ME</h2>
                    <h1>My name is Rakesh Simma, I’m a Photographer</h1>
                    <p>
                        The world without photography will be meaningless to us if there is no light and color,
                        which opens up our minds and expresses passion. My photos are inspired by light, color,
                        creative perspective, techniques & personalities.
                    </p>
                    <a href="#" className="readMore">
                        READ MORE →
                    </a>
                </div>
            </div>
        </div>
    );
}
