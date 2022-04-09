import React from 'react'
// import './Assets/contact.css';

// const handleQuery = (event) => {
//     if (document.getElementById("email").innerHTML != "" && document.getElementById("query").innerHTML != "") {
//         document.getElementById("heading").innerHTML = "Thankyou for your response !!  Your Query/Suggestion has been Considered !!";
//     }

   

const Contact = () => {

    const [user, setUser] = useState({
        name: "", 
        email: "" , 
        message: ""
    });

    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value});
    }

    const PostData = async(e) =>{
        e.preventDefault();

        const{name, email } = user;

        const res = await fetch("/contact",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name:name , 
                email:email,
                message: message
            })
        });

        const data = await res.json();
        console.log(res);

        if(res.status === 422 || !data){

            window.alert("Feedback Not Received");
            console.log("Feedback Not Received");
        }
        else{
            window.alert("Feeback Received");
            console.log("Feedback Redeived");
        }
    }

    return (
        <>
            <div className='text-center my-3'>
                <h3 id="heading"> Feedback form</h3>
            </div>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>

                    <form method="post">
                    <div class="mb-3">
                            <label  for="exampleFormControlInput1" class="form-label" name="email">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" 
                            value = {user.name} onChange={handleInputs}
                            />
                        </div>
                        <div class="mb-3">
                            <label  for="exampleFormControlInput1" class="form-label" name="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" 
                            value = {user.email} onChange={handleInputs}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" name="message">Example textarea</label>
                            <textarea  class="form-control" id="query" rows="3"
                            value = {user.message} onChange={handleInputs}
                            ></textarea>
                        </div>
                    </form>

                </div>

                <div className="col-md-12 text-center">
                    <button class="btn btn-outline-success" onClick={PostData} type="submit" value="Submit">Submit</button>
                </div>
            </div>

        </>

    )
}
export default Contact