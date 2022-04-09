import React, { useEffect, useState } from 'react'

function Display() {

  const [input, setInput] = useState();
  const [content, setContent] = useState([]);

  const HandleSearchBar = async (e) => {
    e.preventDefault();

    const res = await fetch('/viewproducts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pname: input
      })
    });

    const data = await res.json();
    console.log("--------------");
    console.log(data.products);

    setContent(data.products);
    // data.products.map((p)=>{
    //   setContent((c)=>[...c,p])
    // })

    if (res.status === 400 || !data) {
      window.alert("Invalid search");
      console.log("Invalid search");
    }

  }
  return (
    <>
      <div className="container">
        <form class="d-flex my-5">
          <input class="form-control me-2 " type="search" name='input' id='input'
            value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the Product name here" aria-label="Search" />
          <button className="btn btn-outline-success"
            onClick={HandleSearchBar}
            type="submit">Search</button>
        </form>

        <h2 className='text-center'>
          Related to your Search:
        </h2>
        <div>
          <div class="text-center">
            <h2 class="card-title">Object details</h2>
          </div>

          {content.map((i) => (
            <div class="card mb-3" height={100} width={50} >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={i.p_image} class="img-fluid rounded-start" height={200} alt="Product Imahe" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> {i.p_name} </h5>
                    <p class="card-text">Product Origin: {i.p_origin}</p>
                    <p class="card-text">Product Price: {i.p_price}</p>
                    <p class="card-text">Product Manufacture Year: {i.p_mfgyear}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )

}
export default Display
