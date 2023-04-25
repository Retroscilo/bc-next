import { signIn } from "next-auth/react";

export default function Root() {
	return <div onClick={signIn}>Hello world!</div>;
}
