import React, {useState} from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/gif2.gif';
import {Link, useNavigate} from "react-router-dom";
export function HideGift() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const checkPassword = () => {
        if (password.toLowerCase() === "emyeuanh") {
            alert("ANH CŨNG YÊU EM KEKE❤️❤️❤️")
            navigate("/gift2");
        }
        setErrorMessage("Gợi ý nè: mật khẩu sẽ có 8 chữ cái nhó🥰🥰")
    };
    return (
        <>
            <div className="card">
                {/*<Link to="/open1">*/}
                    <img src={gif1} alt="birthday" className="birthday" />
                {/*</Link>*/}
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    {/*<h1>IT'S A GIFT</h1>*/}
                    {/*<br/>*/}
                    <p className="size_p_tag">Bùmmm!! Khui quà xongg gòi</p>
                    <p className="size_p_tag">Nhưng mà chưa hết đâu nhóe, anh còn nhiều quà lắm kaka, đố em anh còn mấy món quà nữa đấy🥰🥰🥰</p>

                    <p className="size_p_tag">Bây giờ anh và em sẽ cùng mở món quà thứ 2 nhé😍</p>
                    <p className="size_p_tag">À mà khoan!!! món quà thứ 2 này hơi khó mở đấy nha, em phải có chìa khóa mới mở được nè keke</p>
                    <p className="size_p_tag">Thực ra chìa khóa cũng dễ thôi, chỉ cần em yêu anh là sẽ mở được thui nè hí hí</p>
                    <p className="size_p_tag">Em hãy nhập mật khẩu để có được chìa khóa mở quà nè❤️</p>

                    <input placeholder="điền mật khẩu vợ ui" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input className="mx-2 btn btn-success" type="submit" value="Check" onClick={() => checkPassword()}/>
                    <br/>
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}



                </div>
                <div className="space"></div>
            </div>
        </>
    )
}