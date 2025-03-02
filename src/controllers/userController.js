import { findUserById, saveUser } from "../models/userModel";
import { processUserData } from "../services/userService";

export async function getUser(request, url) {
	const userId = url.pathname.split("/")[3];
	const user = await findUserById(userId);

	if (!user) {
		return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
	}

	return new Response(JSON.stringify(user), { headers: { "Content-Type": "application/json" } });
}

export async function createUser(request) {
	const data = await request.json();
	const processedUser = processUserData(data);
	const savedUser = await saveUser(processedUser);

	return new Response(JSON.stringify({ message: "User created", user: savedUser }), {
		headers: { "Content-Type": "application/json" },
	});
}
