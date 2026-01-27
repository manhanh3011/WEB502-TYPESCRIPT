import type { IProduct } from "./Product";

export interface ICart extends IProduct {
    count: number,
}