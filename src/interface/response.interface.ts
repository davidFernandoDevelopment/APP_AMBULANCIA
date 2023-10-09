export interface ResponseAPI<T> {
	ok: boolean;
	status: number;
	result: T;
}
