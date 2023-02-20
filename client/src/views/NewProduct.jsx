import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"


const NewProduct = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: ""
    });

    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formData)
            .then(res => {
                console.log(res);
                navigate('/products')
            }).catch(err => {
                console.log(err)
            })
    }

    const handleOnChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
    }


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="title"
                        value={formData.title}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Price</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="price"
                        value={formData.price}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="description"
                        value={formData.description}
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewProduct;