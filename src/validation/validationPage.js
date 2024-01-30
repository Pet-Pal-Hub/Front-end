import React, {useEffect, useState} from 'react';
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
// import {RoutePathNames} from "../Routes/RoutePathNames";
import "./validationPage.css"
import {useNavigate} from "react-router-dom";
function ValidationPage() {
        useEffect(() => {
            const codes = document.querySelectorAll(".ValidationPageCodeInput");
            codes[0].focus();
            codes.forEach((code, index) => {
                code.addEventListener("keydown", (e) => {
                    if (e.key >= 0 && e.key <= 9) {
                        codes[index].value = "";
                        if (codes[index + 1]) {
                            setTimeout(() => codes[index + 1].focus(), 10);
                        }
                    } else if (e.key === "Backspace") {
                        if (codes[index - 1]) {
                            setTimeout(() => codes[index - 1].focus(), 10);
                        }
                    }
                }
            });
        });
    }, []);
    const LOCAL_STORAGE_KEY = "token";

    const [token, setToken] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
    }, [token]);
    const [first,setFirst] = useState(0);
    const [second,setSecond] = useState(0);
    const [third,setThird] = useState(0);
    const [fourth,setFourth] = useState(0);
    const [fifth,setFifth] = useState(0);
    const [sixth,setSixth] = useState(0);
    const navigate = useNavigate();

    const onSubmitHandler =  async () => {

        const  verifyRequest={
            "token":String(token),
            "verifyCode":  String(first)+String(second)+String(third)+String(fourth)+String(fifth)+String(sixth)
        }
        try {
            console.log(verifyRequest)
            const response = await ProxyApi.post("verifyMail", verifyRequest)
            console.log(response)
            navigate("/")
        } catch (error) {
            alert("not valid verification code")
        }
    }
    return (
        <div className="ValidationPageBody">
            <div className="ValidationPageContainer">
                <h2 style={{ color:"#fdffff" }}>VERIFY ACCOUNT</h2>
                <div className="ValidationPageCode">
                    <input type="number" value={first}
                           onChange={(event)=>{
                               setFirst(event.target.value);
                           }
                           } className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                    <input type="number" value={second}
                           onChange={(event)=>{
                               setSecond( event.target.value);
                           }
                           } className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                    <input type="number" value={third}
                           onChange={(event)=>{
                               setThird( event.target.value);
                           }
                           } className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                    <h2>-</h2>
                    <input type="number" value={fourth}
                           onChange={(event)=>{
                               setFourth( event.target.value);
                           }
                           }className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                    <input type="number" value={fifth}
                           onChange={(event)=>{
                               setFifth( event.target.value);
                           }
                           } className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                    <input type="number" value={sixth}
                           onChange={(event)=>{
                               setSixth( event.target.value);
                           }
                           }className="ValidationPageCodeInput" placeholder="0" min="0" max="9" required/>
                </div>

                <div>
                    <button type="button" className="btn btn-primary w-25 btn-lg rounded-5" onClick={onSubmitHandler}>
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ValidationPage;