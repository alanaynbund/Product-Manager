import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                console.log(err);
            });
    })

    if (product === null) {
        return <h1>Loading...</h1>
    }
    const { title, price, description } = product;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
};

export default OneProduct;