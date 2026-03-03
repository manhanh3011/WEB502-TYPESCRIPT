export type IBook = {
    id:string,
    titleBook: string,
    quantity: number,
    publishedYear: number,
    isNew: boolean,
    image: string,
    category: string
}

export type BookInput = Omit<IBook, "id">