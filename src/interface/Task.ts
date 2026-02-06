export interface ITasks{
    id: string,
    title: string,
    dueDate: string,
    priority: string,
    status: boolean | string
}

export type TaskInput = Omit<ITasks, "id">