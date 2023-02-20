import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])
    return (
        <div className="w-5 mx-auto text-center">
            <h2>All Products</h2>
            {
                products.map((product, i) => {
                    const {_id, title, price, description,} = product;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/products/${_id}`}><h4>{title}</h4></Link>
                            <p>{price}</p>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AllProducts;