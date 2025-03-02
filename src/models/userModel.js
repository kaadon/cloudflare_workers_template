export async function findUserById(userId) {
	const query = `SELECT * FROM users WHERE id = ?`;
	const { results } = await DB.prepare(query).bind(userId).all();
	return results.length > 0 ? results[0] : null;
}

export async function saveUser(user) {
	const query = `INSERT INTO users (name, age) VALUES (?, ?) RETURNING *`;
	const { results } = await DB.prepare(query).bind(user.name, user.age).all();
	return results[0];
}
