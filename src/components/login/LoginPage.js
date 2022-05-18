import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/api"
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
			<Heading content="Login" />
			{BASE_URL}
			<LoginForm />
		</>
	);
}
