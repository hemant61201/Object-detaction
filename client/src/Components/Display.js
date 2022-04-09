import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Display() {

  //const history = useHistory();
  // const [input,setInput] = useState('');
//   const [productdetail, setProductdetail] = useState({
//     p_name:" " , 
//     p_origin:" " , 
//     p_price:" " , 
//     p_mfgyear:" " , 
//     p_image:" "
// });


  // const handleSearch = async(e) => {
  //     e.preventDefault();

  //     const res = await fetch('/viewproductsbyid',{
  //       method:"POST",
  //       headers:{
  //           "Content-Type" : "application/json"
  //       },
  //       body:JSON.stringify({
  //           pname : input
  //       })
  //   }); 
    // console.log(res);
    // const {pname} =  res.data;
    //history.push("/display");
    
    // const result = await res.json();

    // setProductdetail(result.p_name);
    // setProductdetail(result.p_origin);
    // setProductdetail(result.p_price);
    // setProductdetail(result.p_mfgyear);
    // setProductdetail(result.p_image);
    // setProductdetail(result.p_name);

    // console.log(result.products);


    return (
      <>
        <div className="container">
          <h1>
            hello this is display page
          </h1>
      <form action="" method="post">
        <button className="btn btn-outline-success" 
        //onClick={handleSearch}
        type="submit">Search</button>
      </form>
         
          {/* <h2>{props.data}</h2> */}
        </div>
      </>
    )
}


export default Display
