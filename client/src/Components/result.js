import React from 'react'

import Data from "../temp.json";
               
const res = Data.result;

function result() {



         const handleSearch = async(e) => {
            e.preventDefault();

            const res = await fetch('/viewproducts',{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    pname : result
                })
            }); 
            // console.log(res);
            // const {pname} =  res.data;
            // history.push("/display");

            const setInput = await res.json();
            console.log(setInput.products);
            
            // console.log("This is data" + res.data );
        }; 
    
        return (
            <div>
                <ul>
                    {res.valueOf(result)}
                </ul>
                <button className="btn btn-outline-success"  
                    onClick={handleSearch}  
                    type="submit">Search</button>  
            </div>
        ) 

}

export default result 