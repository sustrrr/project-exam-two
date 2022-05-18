import GetGuesthouse from "./GetGuesthouse";

import Footer from "../../layout/footer/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";
import Search from "../../home/Search";

function GuesthousePage() {
			return (
				<>
				<div className="guesthouse">
				<HeadingImage style="guesthouse__image"/>
				<div class="wrapper">
				<div class="item-container">
				<HeadingOne titleStyle="h1__big-header" content="Guesthouses"/>
				<Search/>
				</div>
				<div class="accomodations">
				<GetGuesthouse/>
				</div>
				<div class="item-container">
				<HeadingTwo>Accomodations by type</HeadingTwo>
				</div>
				</div>
				</div>
				<Footer/>
				</>
			);
}

export default GuesthousePage;