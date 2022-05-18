import GetBB from "./GetBB";

import Footer from "../../layout/footer/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";
import Search from "../../home/Search";


function BBPage() {
			return (
				<>
				<div className="bb">
				<HeadingImage style="bb__image"/>
				<div class="wrapper">
				<div class="item-container">
				<HeadingOne titleStyle="h1__big-header" content="B&B"/>
				<Search/>
				</div>
				<div class="accomodations">
				<GetBB/>
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

export default BBPage;