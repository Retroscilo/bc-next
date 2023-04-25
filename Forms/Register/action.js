export default async function RegisterAction(form) {
	console.log(form);
	try {
		const res = await fetch("http://localhost:3000/v1/auth/register", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(form),
		});
		console.log(res.status);
		if (res.status === 201) window.location.replace(window.location.origin + "/");
	} catch (e) {
		console.log(e);
	}
}
