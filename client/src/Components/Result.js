import React, { useState } from 'react'
import Data from "../temp.json";

const res_data = Data.result;


function Result() {

    console.log(res_data.valueOf('result'));
    var graph = res_data.valueOf('result') + " ";
    console.log("graph: " + graph);
    const [inputupload, setInputupload] = useState({
        p_name: '',
        p_origin: '',
        p_price: '',
        p_mfgyear: '',
        p_image: '',
        p_no: ''
    });

    const handleSearch = async (e) => {
        e.preventDefault();

        const res = await fetch('/viewproductsbyid', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                p_no: graph
            })
        });

        const data = await res.json();
        console.log(data.products);
        setInputupload(data.products);
        // const value = setInput.products[0];
        setInputupload({
            p_name: data.products[0].p_name,
            p_origin: data.products[0].p_origin,
            p_price: data.products[0].p_price,
            p_mfgyear: data.products[0].p_mfgyear,
            p_image: data.products[0].p_image,
            p_no: data.products[0].p_no
        });
        // setInputupload({
        //     p_name: data.products.p_name,
        //     p_origin: data.products.p_origin,
        //     p_price: data.products.p_price,
        //     p_mfgyear: data.products.p_mfgyear,
        //     p_image: data.products.p_image,
        //     p_no: data.products.p_no
        // });

    };

    return (
        <>
            <div className='container text-center'>
                <h1 value={res_data.valueOf('result')} onChange={(e) => setInputupload(e.target.value)}>
                    {res_data.valueOf('result')}
                </h1>
                <br />
                <button className="btn btn-outline-success"
                    id="submit" onClick={handleSearch}
                    type="submit">See Output</button>
                <br />
                <br />
                <h5 class="card-title">Object details</h5>
               <br />
                <div class="card mb-3" height={200} width={150}  >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={inputupload.p_image} class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> {inputupload.p_name} </h5>
                    <p class="card-text">Product Origin: {inputupload.p_origin}</p>
                    <p class="card-text">Product Price: {inputupload.p_price}</p>
                    <p class="card-text">Product Manufacture Year: {inputupload.p_mfgyear}</p>
                  </div>
                </div>
              </div>
            </div>

        </div> 

            
    </>
    )
}


export default Result

