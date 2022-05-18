import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import DashboardMenu from "./DashboardMenu";

import HeadingImage from "../layout/headings/HeadingImage";

export default function DashboardPage({ children }) {
	return (
		<div className="hotels">
				<HeadingImage style="hotels__image"/>
				<div class="wrapper"></div>
			<Heading content="Dashboard" />
			<DashboardMenu />
			{children ? children : <p>Select a section</p>}
			</div>
	);
}

DashboardPage.propTypes = {
	children: PropTypes.node,
};
