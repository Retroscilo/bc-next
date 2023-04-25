import React, { useState } from "react";
import { TextField, FormControl, FormControlLabel, Checkbox, Card, Button, Typography } from "@mui/material";
// @ts-ignore
import style from "./style.module.css";
import action from "./action";

export default function LoginForm({ csrfToken }) {
	const [verify, setVerify] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
		CGU: false,
		csrfToken,
	});

	function onChange(e) {
		setForm({ ...form, [e.target.id]: e.target.value });
	}

	async function onSubmit() {
		const res = await action(form);
		setVerify(res);
	}

	return (
		<Card sx={{ maxWidth: 500, maxHeight: 300, p: 5 }}>
			{!verify ? (
				<FormControl className={style.form}>
					<TextField onChange={onChange} id="email" label="Email" variant="outlined" margin="normal" fullWidth />
					<FormControlLabel sx={{ width: "100%" }} control={<Checkbox />} label="Authorisez-vous bio-coop à ..." />
					<Button variant="contained" onClick={onSubmit}>
						Connection
					</Button>
				</FormControl>
			) : (
				<Typography>Merci de vérifier votre email !</Typography>
			)}
		</Card>
	);
}
