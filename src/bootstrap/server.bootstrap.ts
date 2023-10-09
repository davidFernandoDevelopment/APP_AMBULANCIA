import http from 'http';
import { AddressInfo } from 'net';
import { Application } from 'express';

interface Address extends AddressInfo {
	port: number;
}

export default class Server {
	constructor(private readonly app: Application) {}

	async initialize() {
		const promiseServer = new Promise((resolve, reject) => {
			const server: http.Server = http.createServer(this.app);

			server
				.listen(3000)
				.on('listening', () => {
					console.log(
						`Server is running in port ${(server.address() as Address).port}`
					);
					resolve('1');
				})
				.on('error', (err) => {
					console.log(err);
					reject(err);
				});
		});

		return await promiseServer;
	}
}
