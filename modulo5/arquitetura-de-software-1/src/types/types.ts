export enum USER_ROLES {
    ADMIN = "ADMIN",
    USER = "USER"
}

export type User = {
    name:string
	email:string
	password:string
	role:USER_ROLES
}


	
