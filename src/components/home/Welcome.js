import Search from "./Search";
import HeadingOne from "../layout/headings/HeadingOne";


function Welcome() {
			return (
                <div class="hero">
                    <HeadingOne titleStyle="h1__smaller-header" content="Book your next stay in Bergen here!"/>
                    <Search/>
                </div>
			);
}

export default Welcome;