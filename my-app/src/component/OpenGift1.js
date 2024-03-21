import React from 'react';
import "./HomePage.css"
import vd1 from '../assets/img/myVideo.mp4';
import gif1 from '../assets/img/gif1.gif';
import {Link} from "react-router-dom";
//
export function OpenGift1() {
    return (

        <>
            <div className="card">
                <video controls  style={{width: '30%'}}>
                    <source src={vd1} type="video/mp4"/>
                    {/* Nếu trình duyệt không hỗ trợ định dạng video này */}
                    Your browser does not support the video tag.
                </video>
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    {/*<h1>IT'S A GIFT</h1>*/}
                    {/*<br/>*/}
                    <p className="size_p_tag">Tadaa, đây là món quà đầu tiên nè, hi vọng em sẽ thích nó, anh còn nhiều video lắm đấy nhóe kaka🥰🥰</p>
                    <p className="size_p_tag">Mua chuộc anh đi, anh sẽ cho em xem thêm nhiều nhiều nữa nè kaka</p>
                    <h1>LOVE YOU😘😘😘</h1>

                    <Link to="/hide1">
                        <img src={gif1} alt="" style={{display: ""}}/>
                    </Link>
                </div>
                <div className="space"></div>
            </div>
        </>
    )
}