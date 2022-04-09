import React, { useState } from 'react'

import Data from "../temp.json";

const res = Data.result;

function Result() {

    // const var = {res.valueOf(result)}

    // const [userData, setUserData] = useState({
    // p_name:'', 
    // p_origin:'',
    // p_price:'',
    // p_mfgyear:'',
    // p_image:'',
    // p_no:''
    // })
    const handleSearch = async (e) => {
        e.preventDefault();

        const res = await fetch('/viewproductsbyid', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                p_no: res
            })
        });

        const data = await res.json();
        console.log(data.products);

    };

    return (
        <>
            <div className='container text-center'>
                <ul>
                    {res.valueOf(result)}
                </ul>
                <button className="btn btn-outline-success"
                    onClick={handleSearch}
                    type="submit">See Output</button>

                <div class="card" style="width: 18rem;">
                    <img src={data.product.p_img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Object details</h5>
                            <p class="card-text">Product Name: {data.products.p_name}</p>
                            <p class="card-text">Product Origin: {data.products.p_origin}</p>
                            <p class="card-text">Product Price: {data.products.p_price}</p>
                            <p class="card-text">Product Mfg Year: {data.products.p_mfgyear}</p>
                            {/* <p class="card-text">Product name</p> */}

                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                </div>
            </div>
        </>

    )

}

export default Result 