import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../../constants/api"

import Button from "../../layout/Button";

import { IoIosCheckmark } from "react-icons/io";


const GetGuesthouse = () => {
	 	const [error, setError] = useState(null);
		const [isLoaded, setIsLoaded] = useState(false);
		const [pages, setPages] = useState([]);
	
		useEffect(() => {
			fetch(BASE_URL + "wc/store/products?per_page=27")
				.then(res => res.json())
				.then(
					(data) => {
						setIsLoaded(true);
						setPages(data.filter(page => page.categories[0].id === 29))
					},
					(error) => {
						setIsLoaded(true);
						setError(error);
					}
				)
		  }, [])
		  console.log(pages);

	if (error) {
		return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else { 
			return (
				<div>
					{pages.map(page => (	
					<Link to={`../detail/${page.id}`} key={page.id}> 
					<div className="card">
						<img src={page.images[0].src}/>
						<div className='cardbody-one'>
							<h3>{page.name}</h3>
							<div class="cardbody-one__reviews"><span>rated</span> <p>{page.average_rating} / 5.00</p>
							</div>
							<ul class="cardbody-one__tags">
								<li><IoIosCheckmark class="cardbody-one__icon"/>{page.tags[0].name}</li>
								<li><IoIosCheckmark class="cardbody-one__icon"/>{page.tags[1].name}</li>
								<li><IoIosCheckmark class="cardbody-one__icon"/>{page.tags[2].name}</li>
							</ul>
							</div>
						<div className='cardbody-two'>
							<p className='cardbody-two__price'>Starts at: <span>{page.prices.price}$</span></p>
							<Button buttonstyle="cardbody-two__booknow">View more</Button>
						</div>
					</div>
					</Link>
					))}
					</div>
			);
		}
	}
	export default GetGuesthouse;