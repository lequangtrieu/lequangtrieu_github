import React from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/gif3.gif';
import {Link} from "react-router-dom";
export function GiftPage2() {
    return (

        <>

            <div className="card">
                <Link to="/open2">
                    <img style={{width: '100%'}} src={gif1} alt="birthday" className="birthday" />
                </Link>
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    <h1>GET THE KEY</h1>
                    <br/>
                    <p className="size_p_tag">Ô hô, vợ anh giỏi quá, lấy được chìa khóa rùi nè!! Yêu vợ, yêu vợ❤️❤️</p>
                    <p className="size_p_tag">2 vợ chồng mình khui quà tiếp thui nào keke</p>



                </div>
                <div className="space"></div>
            </div>
        </>
    )
}