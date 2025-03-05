import { env } from 'cloudflare:test';

export async function findUserByName(userName) {
	const query = `SELECT * FROM users WHERE name = ?`;
	const { results } = await env.DB.prepare(query).bind(userName).all();
	return results.length > 0 ? results[0] : null;
}

export async function saveUser(user) {
	const query = `INSERT INTO users (name, password) VALUES (?, ?) RETURNING *`;
	const { results } = await DB.prepare(query).bind(user.name, user.password).all();
	return results[0];
}

