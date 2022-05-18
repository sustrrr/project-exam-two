import Details from "./Details"

import Footer from "../../layout/footer/Footer";
import HeadingTwo from "../../layout/headings/HeadingTwo";


function DetailPage() {
			return (
				<>
				<div className="detailpage">
				<div class="wrapper">
				<div class="item-container">
				</div>
				<Details/>
				</div>
				<div class="item-container">
				</div>
				<div class="item-container">
				<HeadingTwo>Accomodations by type</HeadingTwo>
				</div>
				</div>
				<Footer/>
				</>
			);
}

export default DetailPage;