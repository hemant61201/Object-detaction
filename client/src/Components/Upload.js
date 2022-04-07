import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function Upload() {

  // const handleInputImg = async() =>{

  // }

 // const history = useHistory();
//
 // const callUploadPage = async() =>{
//
 //   try {
 //     
 //     const res = fetch('/upload', {
 //     method: "GET",
 //     headers: {
 //       Accept:"application/json",
 //       "Content-Type": "application/json"
 //     },
 //     credentials: "include"
 //   });
//
 //   const data = await res.json();
 //   console.log(data);
//
 //   if(!res.status === 200){
 //     const error = new Error(res.error);
 //     throw error;
 //   }
//
 //   } catch (err) {
 //     console.log(err);
 //     history.push('/signin');
 //   }
 // }
//
 // useEffect(()=>{
//
 //   callUploadPage();
//
 // },[]);
//

  // const history = useHistory();
  // const callUploadPage = async() =>{
  //     try {
  //       const res = await fetch('/upload',{
  //         method:"GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         credentials:"include"
  //       });

  //       const data = await res.json();
  //       console.log(data);
        
  //       if(!res.status === 200){
  //         const error = new Error(res.error);
  //         throw error; 
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       history.push('/signin');
  //     }
  // }

  //   useEffect(() =>{
  //     callUploadPage();
  //   },[]);


  return (

    <>

      <div className='text-center my-5'>
        <h3> Upload Your Photo Here</h3>
        <div className='row'>
          <div className="col-md-6 offset-md-3"> 
          
          <form action="" method="post">
          <label for="formFileLg" class="form-label"></label>
          <input class="form-control form-control-lg" id="formFileLg" name = "formFile"
          // value = {user.formFile} onChange={handleInputImg}
          type="file"/>
          <br /> <br />
          <div className="col-md-12 text-center">
          <button class="btn btn-outline-success" type="submit" 
          name='upload' id='upload'
          value="Submit">Upload</button>
          </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Upload