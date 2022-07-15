export interface IItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoInput {
    title: string,
    completed: boolean
}