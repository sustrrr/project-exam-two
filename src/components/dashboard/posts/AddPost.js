///adds establishment

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import MediaDropdown from "../media/MediaDropdown";
import DashboardPage from "../DashboardPage";

const schema = yup.object().shape({
	name: yup.string().required("Title is required"),
	tag: yup.string().required("Tag is required"),
});

export default function AddPost() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const [mailsent, mailSent] = useState(true);
	const [mailfailed, mailFailed] = useState(true);

	const history = useHistory();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		console.log(data);

		try {
			const response = await http.post("wc/v3/products", data);
			console.log("response", response.data);
			mailFailed(true);
			mailSent(false);
		} catch (error) {
			mailFailed(false);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
        <DashboardPage>
			<Heading content="Add post" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<input name="name" placeholder="name" ref={register} />
						{errors.name && <FormError>{errors.name.message}</FormError>}
					</div>

					<div>
						<input name="regular_price" placeholder="price" ref={register} />
						{errors.name && <FormError>{errors.name.message}</FormError>}
					</div>

					<div>
						<input name="tags.0.name" placeholder="tag" ref={register} />
						{errors.tag && <FormError>{errors.tag.message}</FormError>}
					</div>

					<div> 
						<select name="categories.0.id" ref={register}>
							<option value="28">Hotels</option>
							<option value="30">BB</option>
							<option value="29">Guesthouse</option>
					 	</select>
					</div>

					<div>
						<textarea name="description" placeholder="description" ref={register} />
					</div>

					<div>
						<MediaDropdown register={register} />
					</div>

					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>

				<div className="mailsent">{mailsent ? "" : "Mail sent!"}</div>
				<div className="mailfailed">{mailfailed ? "" : "Mail failed! Contact our supporters"}</div>
			</form>
        </DashboardPage>
	);
}