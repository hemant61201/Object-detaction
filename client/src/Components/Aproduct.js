import React,{useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom'


function Aproduct() {

    const history = useHistory();
    const [productdetail, setProductdetail] = useState({
        p_name:" " , 
        p_origin:" " , 
        p_price:" " , 
        p_mfgyear:" " , 
        p_image:" "
    });

    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setProductdetail({...productdetail , [name]:value});
    }

    const AddProduct = async(e) => {
        e.preventDefault();

        const {p_name, p_origin, p_price, p_mfgyear, p_image } = productdetail;

        const res = await fetch("/addproduct",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                p_name:p_name , 
                p_origin:p_origin , 
                p_price:p_price , 
                p_mfgyear:p_mfgyear , 
                p_image:p_image
            })
        });

        const data = await res.json();
        console.log(res);

        history.push('/adminhome');
    }
    return (
        <>
            <div className="container">

            <h2>Product Entry Page</h2>

                <form>

                    <div class="form-group row">
                        <label for="p_name" class="col-sm-2 col-form-label">Product Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control font-weight-bold" 
                            name='p_name' id="p_name" 
                            value = {productdetail.p_name} onChange={handleInputs}
                            placeholder="p_name" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label for="p_origin" class="col-sm-2 col-form-label">Product Origin</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control font-weight-bold" 
                            name='p_origin' id="p_origin" 
                            value = {productdetail.p_origin} onChange={handleInputs}
                            placeholder="p_origin" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Product Price</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control font-weight-bold" 
                            id="p_price" name='p_price'
                            value = {productdetail.p_price} onChange={handleInputs}
                            placeholder="p_price" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Manufacture Year</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control font-weight-bold" 
                            id="p_mfgyear" name='p_mgfyear'
                            value = {productdetail.p_mgfyear} onChange={handleInputs} 
                            placeholder="p_mfgyear" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Product Image</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control font-weight-bold" 
                            id="p_image" name='p_image' 
                            value = {productdetail.p_image} onChange={handleInputs}
                            placeholder="p_image" />
                        </div>
                    </div>

                    <br />

                      <div className="col-md-12 text-center">
                            <button className='btn btn-outline-success' name="signin" id="signin" value="submit"
                            onClick={AddProduct} >Register</button>
                        </div>

                </form>
            </div>
        </>
    )

}

export default Aproduct