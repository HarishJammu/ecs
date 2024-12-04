import Image from 'next/image';
import "./Intro.css"
import { mulishFont } from '@/app/fonts/fonts';
export default function AboutMe() {
    return (
        <div className="abot-container">
            <div className="imageSection">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732907633/1304_vkalo9.jpg"
                    alt="Photographer at Sunset"
                    className="image"
                />
            </div>
            <div className="textSection">
                <div className="aboutMe">
                    <h2 className={`${mulishFont}`}>ABOUT ME</h2>
                    <h1 className={`${monsterFont}`}>My name is Rakesh Simma, I’m a Photographer</h1>
                    <p className={`${monsterFont}`}>
                        The world without photography will be meaningless to us if there is no light and color,
                        which opens up our minds and expresses passion. My photos are inspired by light, color,
                        creative perspective, techniques & personalities.
                    </p>
                    {/* <a href="#" className="readMore">
                        READ MORE →
                    </a> */}
                </div>
            </div>
        </div>
    );
}
