import React, {useState} from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/gif3.gif';
import {Link, useNavigate} from "react-router-dom";
import gif2 from "../assets/img/gif2.gif";
export function GiftPage3() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [checkDisplayButton, setCheckDisplayButton] = useState("");
    const [checkDisplay, setCheckDisplay] = useState("none");
    const [checkDisplay2, setCheckDisplay2] = useState("none");
    const checkPassword = () => {
        if (password.toLowerCase() === "emratyeuanh") {
            alert("LOVE YOU❤️❤️❤️")
            setCheckDisplay("none");
            setCheckDisplayButton("none")
            setErrorMessage("");
            setCheckDisplay2("");
        }
        setErrorMessage("Gợi ý nè: nếu vợ iu anh rất nhiều thì sẽ khui quà được thui nè🥰🥰")
    };

    return (

        <>

            <div className="card">
                    <img style={{width: '60%'}} src={gif1} alt="birthday" className="birthday" />
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}

                    <p className="size_p_tag">Hehe, vẫn chưa mở được đâu nè, món quà này cũng khó mở lắm đóa, quà nào càng đặc biệt càng khó mở keke🥰🥰🥰</p>
                    <p className="size_p_tag">Quà này không cần chìa khóa nữa, mà chỉ cần mật khẩu thui kakaka🥰</p>

                    <div className="my-4" style={{display: checkDisplayButton}}>
                        <input type="button" value="Nếu vợ đã sẵn sàng thì bấm vào đây nhá ^^" className="btn btn-primary" onClick={() => setCheckDisplay("")}/>
                    </div>
                    
                    <div style={{display: checkDisplay}}>
                        <h4>Mật khẩu khui quà sẽ có 11 chữ cái nha vợ🥰</h4>

                        <input placeholder="điền mật khẩu ở đây nè vợ ui hí hí" className="form-control" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                        <input className="mx-2 btn btn-success" type="submit" value="Check" onClick={() => checkPassword()}/>
                        {errorMessage && <div className="text-danger">{errorMessage}</div>}
                    </div>

                    <div style={{display: checkDisplay2}}>
                        <h3>Mật khẩu đúng rùi, vợ iu giỏi quá, YÊU YÊU❤️❤️</h3>
                        <h4>Chọc vợ đủ rùi keke, giờ mình khui quà thuii nào😍😍</h4>
                        <Link to="/open3">
                            <img src={gif2} alt="" style={{display: "", width: '20%'}}/>
                        </Link>
                    </div>


                </div>
                <div className="space"></div>
            </div>
        </>
    )
}