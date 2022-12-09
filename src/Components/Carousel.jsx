import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import MoviesComponent from './MovieComponent';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 300 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function MovieCarousel({search}) {
  return (
    <Carousel
    swipeable={true}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={ false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={[ "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
        {
            search.map(movies=>{
                return <MoviesComponent title={movies.Title}/>
            })
        }
</Carousel>
  )
}

export default MovieCarousel;