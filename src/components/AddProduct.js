import axios from 'axios';
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';

function AddProduct() {
    let history = useHistory();
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        description: "",
    
    });
    const { id, name, price, description } = product;

    const onInputChange = e => {
        setProduct({...product,[e.target.name]: e.target.value});
    }

    const onSubmit =async e => {
        e.preventDefault();
        await axios.post("http://localhost:9002/products",product);
        history.push('/');
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A product</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter pid"
                            name="id"
                            value={id}
                            onChange={ e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter product Name"
                            name="name"
                            value={name}
                            onChange={ e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter price"
                            name="price"
                            value={price}
                            onChange={ e=>onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter description"
                            name="description"
                            value={description}
                            onChange={ e=>onInputChange(e)}
                        />
                    </div>
                    

                    <button type="submit" className="btn btn-primary btn-block">Add product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
