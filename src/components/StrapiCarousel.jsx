import React, {useState, useRef} from "react";
import {Carousel} from 'antd';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import "../pages/projects/post.css";
import "./Carousel.css"

const StrapiCarousel = ({itemId}) => {
    const [slide, setSlide] = useState(0);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        console.log("Next slide triggered");
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    }

    const previousSlide = () => {
        console.log("prev slide triggered");
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    }

    const { loading, error, data } = useFetch(`http://localhost:1337/api/projects/${itemId}?populate=*`);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const images = data.data.attributes.image.data;

  return (
    <div>
        {/* Carousel for Images */}
        <div className='carousel-image-container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
            <Carousel
                ref={carouselRef} 
                beforeChange={(from, to) => setSlide(to)}>
                {images.map((img, index) => (
                <div key={index} className='carousel-img'>
                    <img
                    src={`http://localhost:1337${img.attributes.formats.small.url}`}
                    alt={data.data.attributes.title}
                    style={{ width: '100%' }} // You can adjust the style as needed
                    />
                </div>
                ))}
            </Carousel>
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
        </div>
    </div>
    )
}

export default StrapiCarousel