"use client";
import { Box } from "@mui/material";
import RegisterForm from "@/Forms/Register";

export default function Register() {
	const { mag_id } = 0;
	return (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
			<RegisterForm mag_id={mag_id} />
		</Box>
	);
}
