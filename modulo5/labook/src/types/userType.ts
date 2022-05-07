export type userType = {
	id:string
    name:string
	email:string
	password:string
}

export type login = {
	email:string
	password:string
}

export type postType = {
	id:string
	photo:string
	description:string
	type?:string
	created_date?:Date
	author_id:string
}
