import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Products({ data }) {
    return (
        <Link to={`products/${data.id}`}>
            <Card className="my-3 p-3">
                <Card.Img src={data.img} className="p-3" variant="top" />
                <Card.Body>
                    <Card.Title as="div">
                        <h4>{data.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Price:</strong> {data.price} </p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p><strong>Type:</strong> {data.type} </p>
                    </Card.Text>

                </Card.Body>
            </Card>

        </Link>
    )
}

export default Products
