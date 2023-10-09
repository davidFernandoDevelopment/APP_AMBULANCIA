import app from './app.routes';
import Server from './bootstrap/server.bootstrap';
import { Database } from './bootstrap/database.bootstrap';

const start = async () => {
	const server = new Server(app);
	const database = new Database();

	try {
		await database.initialize();
		await server.initialize();
	} catch (err) {
		console.log(err);
		database.disconnect();
	}
};

start();
