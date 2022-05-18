import Footer from "../layout/footer/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";
import ContactForm from "./ContactForm"


function Home() {
			return (
				<div className="contact">
				<HeadingImage style="contact__image"/>
				<div class="wrapper contact">
				<div class="item-container flex">
				<HeadingOne titleStyle="h1__big-header" content="Contact us"/>
				<ContactForm/>
				</div>
				<div class="item-container">
				<HeadingTwo>test heading two</HeadingTwo>
				</div>
				</div>
				<Footer/>
				</div>
			);
}

export default Home;