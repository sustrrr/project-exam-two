import React, { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api"

import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";


import Button from "../../layout/Button";

import { IoIosCheckmark, IoMdPin } from "react-icons/io";

const Details = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pages, setPages] = useState([]);

    const { id } = useParams();
    console.log(id);
    
    useEffect(() => {
        fetch(BASE_URL +  "wc/store/products/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setPages(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

if (pages) {

    console.log(pages);
    return (
        <>
        <div className='detail'>
        
            <Carousel interval={null}>
                <Carousel.Item  >
                    <img
                    className="d-block w-100"
                    src={pages.images[0].src}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={pages.images[1].src}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={pages.images[2].src}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className='detailtext'>
                <HeadingOne titleStyle="h1__big-header" content={pages.name}/>
                <div class="detailtext__reviews"><span>rated</span> <p>{pages.average_rating} / 5.00</p></div>
                <p className='detailtext__price'>Starts at: <span>{pages.prices.price}$</span></p>

                <Link to={`/book/${pages.id}`} key={pages.id}><Button buttonstyle="detailtext__booknow">Book now</Button> </Link>

                <ul class="detailtext__tags">
								<li><IoIosCheckmark class="detailtext__icon"/>{pages.tags[0].name}</li>
								<li><IoIosCheckmark class="detailtext__icon"/>{pages.tags[1].name}</li>
								<li><IoIosCheckmark class="detailtext__icon"/>{pages.tags[2].name}</li>
				</ul>           
            </div>
        </div>

        <HeadingTwo>About</HeadingTwo>
        <div className='detailabout'>
            <p className='detailabout__about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo quam tortor, ut feugiat sem malesuada sed. Phasellus posuere ligula quam, vitae facilisis lorem viverra ut. Curabitur efficitur malesuada dolor quis maximus. Etiam mattis tincidunt nibh sit amet maximus. Quisque maximus dapibus orci, vel consectetur nisl. Sed eget accumsan ipsum. Aenean vel rhoncus libero.</p>
            <p className='detailabout__location'> <IoMdPin className='detailabout__icon'/></p>
            <p className='detailabout__location'>{pages.name} 50, 2030, Bergen</p>
        </div>
        </>
    );
}
}
export default Details;

