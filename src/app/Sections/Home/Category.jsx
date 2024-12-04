import Image from 'next/image';
import "./Intro.css"
import { mulishFont } from '@/app/fonts/fonts';

export default function Category() {
    return (
        <div className="grid-container">
            {/* Fashion Section */}
            <div className="image-col">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732907633/1304_vkalo9.jpg"
                    alt="Fashion"
                    layout="responsive"
                    width={100}
                    height={100}
                />

                <p className="text-overlay"><span className={`${mulishFont}`}>01</span> Fashion</p>

            </div>

            {/* Lifestyle Section */}
            <div className="image-col">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732993455/4547_gt234z.jpg"
                    alt="Lifestyle"
                    layout="responsive"
                    width={100}
                    height={100}
                />
                <p className="text-overlay"><span className={`${mulishFont}`}>02</span> Life Style</p>
            </div>

            {/* Food Section */}
            <div className="image-col">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732907639/17_aye5p1.jpg"
                    alt="Food"
                    layout="responsive"
                    width={100}
                    height={100}
                />
                <p className="text-overlay"><span className={`${mulishFont}`}>03</span> Food</p>

            </div>

            {/* Product Section */}
            <div className="image-col">
                <Image
                    src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1732907649/2151232228_nzbz1r.jpg"
                    alt="Product"
                    layout="responsive"
                    width={100}
                    height={100}
                />
                <p className="text-overlay"><span className={`${mulishFont}`}>04</span> Product</p>
            </div>
        </div>
    );
}
