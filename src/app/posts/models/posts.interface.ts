export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type INewPost = Pick<IPost, 'body' | 'title'>

// export interface INewPost {

// }