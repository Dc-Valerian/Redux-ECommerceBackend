export interface IUser {
	name: string;
	email: string;
	password: string;
	cart: any[];
	isAdmin: boolean;
}


export interface IProduct {
	title: string;
	desc: string;
	price: number;
	quantity: number;
	category: string;
	status: boolean;
}