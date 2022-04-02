import React from 'react'
// import './Assets/contact.css';

const handleQuery = (event) => {
    if (document.getElementById("email").innerHTML != "" && document.getElementById("query").innerHTML != "") {
        document.getElementById("heading").innerHTML = "Thankyou for your response !!  Your Query/Suggestion has been Considered !!";
    }

};

const Contact = () => {
    return (
        <>
            <div className='text-center my-3'>
                <h3 id="heading"> Feedback form</h3>
            </div>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>

                    <form method="post">
                        <div class="mb-3">
                            <label  for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
                            <textarea  class="form-control" id="query" rows="3"></textarea>
                        </div>
                    </form>

                </div>

                <div className="col-md-12 text-center">
                    <button class="btn btn-outline-success" onClick={handleQuery} type="submit" value="Submit">Submit</button>
                </div>
            </div>

        </>

    )
}
export default Contact