import axios from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/Product";


function UseEffect() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<IProduct>();
    const [id, setId] = useState<string|undefined>();

    useEffect(() => {
        const getAllProducts = async() => {
            try {
                const {data} = await axios.get("http://localhost:3000/products");
                // console.log(data);
                if(data) setProducts(data);
            } catch (error) {
                console.log(error);
            }   
        }
        getAllProducts();
    }, []);


    useEffect(() => {
       const getDetails = async () => {
            try {
                 if(!id) return;
                const {data} = await axios.get(`http://localhost:3000/products/${id}`);
                // console.log(data);
                if(data) setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [id])

  return (
    <div className="flex">
        <div className="mr-10">
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products && products.map((item: IProduct, index: number) => (
                    <li key={item.id} onClick={() => {setId(item.id)} }>
                        {index+1}. {item.name} | {item.price} | {item.category}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h1>Chi tiết sản phẩm</h1>
             {product && (
                <div>
                    <h1>Tên sản phẩm: {product.name} </h1>
                    <h2>Gía: {product.price} </h2>
                    <h2>Số lượng: {product.quantity} </h2>
                    <img width={100} src={product.image} alt={product.name} />
                    <p>Mô tả: {product.description} </p>
                </div>
             )}       
        </div>
    </div>
  )
}

export default UseEffect