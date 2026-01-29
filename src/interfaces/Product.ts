export interface IProduct {
    id: string,
    name: string,
    price: number,
    quantity: number,
    rate: number,
    image: string,
    category: string,
    description: string
}

export type ProductAdd  =  Omit<IProduct, "id" | "rate"> 