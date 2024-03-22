import React from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/gif4.gif';
import gif2 from '../assets/img/gif2.gif';
import {Link} from "react-router-dom";
export function HideGift2() {
    return (

        <>
            <div className="card">

                    <img style={{width: '60%'}} src={gif1} alt="birthday" className="birthday" />

                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    <p className="size_p_tag">Mới đây mà đã khui xong 2 món quà rùi, shao nhanh quá dzị tarr</p>
                    <p className="size_p_tag">2 món quà vừa rùi vợ iu có thích khum nè, nếu có thì nhớ hun chồng nhiều nhiều lên đó nhoaa</p>
                    <p className="size_p_tag">Còn nếu chưa thìii,.... khum shao chồng còn nhiều quà lắm, chồng sẽ tặng cho vợ dần dần nè kaka😍</p>
                    <p className="size_p_tag">Điều bất ngờ thường đến muộn mà, phải khum vợ iu kaka😘😘</p>
                    <p className="size_p_tag">Không để vợ đợi lâu nữa, khui quà thôi nào🥰🥰</p>

                    <Link to="/gift3">
                        <img src={gif2} alt="" style={{display: "", width: '20%'}}/>
                    </Link>
                </div>
                <div className="space"></div>
            </div>
        </>
    )
}