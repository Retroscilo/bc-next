export default async function LoginAction(form) {
	try {
		if (!form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
			throw new Error("Ce n'est pas un mail valide !");
		const res = await fetch("/api/auth/signin/email", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(form),
		});
		if (res.url) return true;
	} catch (e) {
		console.log(e);
	}
}
