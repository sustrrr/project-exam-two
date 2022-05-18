import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import DashboardPage from "../DashboardPage";

export default function ContactMessages() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();


	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/pages?status=draft");

				console.log("response", response);
				setPosts(response.data);
				
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
	}, []);

	if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;

	return (
		<DashboardPage>
		<ul className="posts">
			{posts.map((media) => {
				return (
					<li key={media.id}>
						<p>For: {media.excerpt.rendered}</p>
						<p>Booked by: {media.title.rendered}</p>
						<p>Message: {media.content.rendered}</p>
					</li>
				);
			})}
		</ul>
		</DashboardPage>
	);
}
