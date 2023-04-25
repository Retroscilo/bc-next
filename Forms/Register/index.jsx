import React, { useEffect, useState } from "react";
import { TextField, FormControl, FormControlLabel, Checkbox, Card, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// @ts-ignore
import style from "./style.module.css";
import action from "./action";

export default function RegisterForm({ mag_id }) {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);
	const [form, setForm] = useState({
		email: "",
		password: "",
		CGU: false,
	});
	const [isHovered, setIsHovered] = useState(false);

	function onChange(e) {
		setForm({ ...form, [e.target.id]: e.target.value });
	}

	async function onSubmit() {
		const res = await action(form);
	}

	useEffect(() => console.log(isHovered), [isHovered]);

	return (
		<Card sx={{ maxWidth: 500, maxHeight: 300, p: 5 }}>
			<FormControl className={style.form}>
				<TextField onChange={onChange} id="email" label="Email" variant="outlined" margin="normal" fullWidth />
				<TextField
					type={showPassword ? "text" : "password"}
					onChange={onChange}
					id="password"
					label="Mot de passe"
					variant="outlined"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					fullWidth
					margin="normal"
					InputProps={{
						endAdornment: isHovered && (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<FormControlLabel sx={{ width: "100%" }} control={<Checkbox />} label="Authorisez-vous bio-coop à ..." />
				<Button variant="contained" onClick={onSubmit}>
					S'inscrire au programme de fidélité
				</Button>
			</FormControl>
		</Card>
	);
}
