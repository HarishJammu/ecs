import React from 'react';
import Image from 'next/image';
// Sample data - you'll replace this with your actual images and details
import "./Intro.css"
import { cormorantFont, montserratFont, mulishFont } from '@/app/fonts/fonts';
const categoriesData = [
    {
        name: 'Fashion',
        images: [
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
        ]
    },
    {
        name: 'Product Shoots',
        images: [
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733635800/228A4750a_bfkdv0.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733635800/228A4750a_bfkdv0.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733635800/228A4750a_bfkdv0.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733635800/228A4750a_bfkdv0.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733635800/228A4750a_bfkdv0.jpg',
        ]
    },
    // {
    //     name: 'Corporate Shoots',
    //     images: [
    //         'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
    //         'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
    //         'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
    //         'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
    //         'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg',
    //     ]
    // },
    {
        name: 'Food Shoots',
        images: [
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733636194/foods-flying-air-with-tomatoes-black-textured-background-side-view_csiavd.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733636194/foods-flying-air-with-tomatoes-black-textured-background-side-view_csiavd.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733636194/foods-flying-air-with-tomatoes-black-textured-background-side-view_csiavd.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733636194/foods-flying-air-with-tomatoes-black-textured-background-side-view_csiavd.jpg',
            'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733636194/foods-flying-air-with-tomatoes-black-textured-background-side-view_csiavd.jpg',
        ]
    }
];

const CategoryRow = ({ category }) => {
    return (
        // <div className="category-row">
        //     <div className="flex items-center">
        //         <h2 className={`category-name font-bold  ${montserratFont}`}>{category.name}</h2>
        //     </div>

        //     <div className="horizontal-scroll-container overflow-x-auto">
        //         <div className="flex space-x-4 min-w-max">
        //             {category.images.map((imageSrc, index) => (
        //                 <div
        //                     key={index}
        //                     className="flex-shrink-0 w-64 h-64 relative hover:scale-105 transition-transform duration-300"
        //                 >
        //                     <Image
        //                         src={imageSrc}
        //                         alt={`${category.name} image ${index + 1}`}
        //                         fill
        //                         className="object-cover image-style rounded-lg"
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <div className="category-row">
            <div className="flex items-center">
                <h2 className="category-name font-bold ps-2">{category.name}</h2>
            </div>

            <div className="horizontal-scroll-container overflow-x-auto">
                <div className="flex space-x-4 min-w-max">
                    {category.images.map((imageSrc, index) => (
                        <div
                            key={index}
                            className="image-wrapper group"
                        >
                            <Image
                                src={imageSrc}
                                alt={`${category.name} image ${index + 1}`}
                                fill
                                className="object-cover image-style rounded-lg"
                            />
                            <div className="image-overlay">
                                <p className={`overlay-text ${montserratFont}`}>{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PhotographyShowcase = () => {
    return (
        <div className="container-showcase">
            <h1 className={`main-title ${montserratFont}`} >My Photography Work</h1>
            {categoriesData.map((category, index) => (
                <React.Fragment key={category.name}>
                    <CategoryRow category={category} />
                    {index < categoriesData.length - 1 && (
                        <div className="w-full h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 my-4"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PhotographyShowcase;