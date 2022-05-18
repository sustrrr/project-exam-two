import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../../constants/api"


const GetBB = () => {
	 	const [error, setError] = useState(null);
		const [isLoaded, setIsLoaded] = useState(false);
		const [pages, setPages] = useState([]);
	
		useEffect(() => {
			fetch(BASE_URL + "wc/store/products?featured=true")
				.then(res => res.json())
				.then(
					(data) => {
						setIsLoaded(true);
						setPages(data.filter(page => page.categories[0].id === 30))
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
					<div key={page.id} class="accomodation">
						<Link to={`../../detail/${page.id}`}>{page.name} </Link>
					</div>
					))}
					</div>
			);
		}
	}
	export default GetBB;