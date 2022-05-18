import GetHotel from "./GetHotel"

import Footer from "../../layout/footer/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";
import Search from "../../home/Search";


function HotelPage() {
			return (
				<>
				<div className="hotels">
				<HeadingImage style="hotels__image"/>
				<div class="wrapper">
				<div class="item-container">
				<HeadingOne titleStyle="h1__big-header" content="Hotels"/>
				<Search/>
				</div>
				<div class="accomodations">
				<GetHotel/>
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

export default HotelPage;