enum TypePost {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}


export type PostInputDTO = {
    photo:string
    description:string
    type?:TypePost
    author_id:string
}