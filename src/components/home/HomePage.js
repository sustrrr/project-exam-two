import Footer from "../layout/footer/Footer";
import Search from "./Search";
import Welcome from "./Welcome";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import Logo from "../layout/Logo";

import FeaturedHotel from "../accommodations/featured/FeaturedHotel";
import FeaturedGuesthouse from "../accommodations/featured/FeaturedHotel";
import FeaturedBB from "../accommodations/featured/FeaturedBB";


function Home() {
			return (
				<>
				<div class="wrapperhome">
				<Welcome/>
				<div class="item-container">
				<HeadingTwo>Our most popular bookings</HeadingTwo>
				<FeaturedHotel/>
				<FeaturedBB/>
				<FeaturedGuesthouse/>
				</div>
				</div>
				<Footer/>
				</>
			);
}

export default Home;