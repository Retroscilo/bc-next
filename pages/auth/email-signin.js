import React from "react";
import LoginForm from "@/Forms/Login";
import { Box } from "@mui/material";
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
			<LoginForm csrfToken={csrfToken} />
		</Box>
	);
}

export async function getServerSideProps(context) {
	const csrfToken = await getCsrfToken(context);
	return {
		props: { csrfToken },
	};
}
