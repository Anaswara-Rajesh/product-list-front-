import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div>
            <div className="main-header">
               <div> <h3 className="heading">Product Application</h3></div>
               <div className="row"><a class="na" href="/#">Home</a></div>
               <div className="row"><a class="na" href="/#">Items</a></div>
               <div className="row"><a class="na" href="/#">Details</a></div>
               <div className="row"><a class="na" href="/#">Contact</a></div>
               <div className="row"><Link className="btn btn-outline-light" to="/products/add">ADD PRODUCT</Link></div>
               
            </div>
        </div>

    )
}

export default Header
