import { Link } from "react-router-dom";

export default function DashboardMenu() {
	return (
		<div className="dashboard">
			<Link to="/dashboard/posts/add">Create establishement</Link>
			<Link to="/dashboard/posts/contact-messages">Contact messages</Link>
		</div>
	);
}