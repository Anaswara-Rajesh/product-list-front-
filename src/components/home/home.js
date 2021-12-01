
import React, { useState, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap';

import './home.css';

import Products from '../Products';
import Header from '../Header';
 
function Home() {


// const [filter,setFilter] = useEffect("")

// useEffect(()=>{
//     dispatch(listProducts())

// },[dispatch])


    const [materials, setMaterials] = useState([]);
    const [filter, setFilter] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/products.json')
                .then(res => res.json())
                .then(data => {
                    setMaterials(data.products)
                })
        }

        fetchData();
    }, [])
    console.log("data is ", materials);

    return (
        <div className="home">
            <Header/>
            
        <Row>
            <input
                value={filter}
                placeholder="search a Products"
                type="text"
                onChange={e => setFilter(e.target.value)} />
            {materials ?
                (materials.filter(item => {
                    if (filter === " ") {
                        return item
                    }
                    else if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                        return item
                    }
                }))
                    .map(item => (
                        <Col sm={12} md={8} lg={6} xl={3}>
                            <Products data={item}/>
                        </Col>
                    )) : "error"
            }
        </Row>
        </div>
    )
}

export default Home
