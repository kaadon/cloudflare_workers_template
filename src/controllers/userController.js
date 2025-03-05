import { findUserByName, saveUser } from '../models/userModel';
import { processUserData } from "../services/userService";

export async function login(request) {
	await saveUser({
		name: "test",
		password: '123456'
	})
	return new Response(JSON.stringify({}), { headers: { "Content-Type": "application/json" } });
}
