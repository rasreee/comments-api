import { Client } from "pg";

const db = new Client()

export async function init() {
	try {
		await db.connect()
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}

export const query = async (text: any, ...rest: any) => {
	const start = Date.now()
	const res = await db.query(text, ...rest)
	const duration = Date.now() - start
	console.log('executed query', { text, duration, rows: res.rowCount })
	return res
}

export default db
