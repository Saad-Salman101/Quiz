
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = () => {


    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password,cpassword}=credentials;    
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password })
        });
        const json = await response.json()
        console.log(json);
            if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");}
        
        else{
            alert("Invalid credentials");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="exampleInputEmail1" name="email"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="cpassword" id="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
