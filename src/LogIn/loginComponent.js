import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./loginComponent.css";
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import {setUserLocalStorageData} from "../Authentication/UserAuthentication";
import {useNavigate} from "react-router-dom";

function LoginComponent({setIsUserLoggedIn}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const authenticationRequest = {
            "email": email,
            "password": password
        }
        console.log(authenticationRequest)
        try {
            const response = await ProxyApi.post("basicSignIn", authenticationRequest)
            setUserLocalStorageData(response.data.id, response.data.token, response.data.role, response.data.shelterId)
            console.log(response)
            setIsUserLoggedIn(true)
            navigate("/");

        } catch (error) {
            // actions.resetForm();
            alert(error.response.data.message)
        }
    }

    return (
        <div className={"loginComponentDiv"}>
            <form className="bg-white shadow-5-strong p-5" onSubmit={handleSubmit}>
                <h2>SignIn</h2>
                <div>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"}/>
                </div>
                <div>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
                </div>
                <button className="btn btn-primary" type="submit">SignIn</button>

                <div className={"hiDiv"}>
                    <label>Don't have an account</label>
                    <a href={"#"}>
                        SignUp
                    </a>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;