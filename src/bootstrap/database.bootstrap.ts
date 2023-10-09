import mongoose, { ConnectOptions } from 'mongoose';
import yenv from 'yenv';

import { DatabaseRepository } from '../interface';

const env = yenv();

export class Database implements DatabaseRepository {
	async initialize(): Promise<any> {
		const promiseInitialize = new Promise((resolve, reject) => {
			const connectionString = `mongodb+srv://${env.DATABASE.MONGO.USER}:${env.DATABASE.MONGO.PASS}@${env.DATABASE.MONGO.HOST}/${env.DATABASE.MONGO.DB}?retryWrites=true&w=majority`;
			const options: ConnectOptions = {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				poolSize: 10,
			};

			const callback = (err: any) => {
				if (err) {
					reject(err);
				} else {
					console.log('Connection database successful !!!!');
					resolve('Connection database successful');
				}
			};
			mongoose.connect(connectionString, options, callback);
		});

		return await promiseInitialize;
	}
	disconnect(): void {
		mongoose.disconnect();
	}
}
