"use client";
import React from "react";
import LoginForm from "@/Forms/Login";
import { Box } from "@mui/material";

export default function Root() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
			<LoginForm />
		</Box>
	);
}
