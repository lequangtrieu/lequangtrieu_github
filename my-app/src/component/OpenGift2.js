import React from 'react';
import "./HomePage.css"
import img2 from '../assets/img/img2.jpg';
import {Link} from "react-router-dom";
import gif1 from "../assets/img/gif1.gif";
export function OpenGift2() {
    return (

        <>
            <div className="card">
                    <img style={{width: '30%'}} src={img2} alt="birthday" className="birthday" />
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}

                    <p className="size_p_tag">Tadaaa, như vậy là vợ chồng mình đã cùng nhau đón sinh nhật của em lần 2 rùi, không biết anh có được đón
                        sinh nhật lần 2 cùng vợ khum đây kaka, vợ vô xác nhận đi nhóe🥰🥰</p>
                    <p className="size_p_tag">Hi vọng là vợ chồng mình sẽ cùng nhau đón thêm ít nhất là 160 cái sinh nhật cùng nhau nữa nhóe keke😍😍</p>
                    <p className="size_p_tag">Tại thời gian ít quá nên anh không thêm nhiều thứ cutee vô cho vợ xem được, nhưng khum sao, ít bữa đón sinh nhật cùng nhau tiếp anh sẽ nâng cấp chiếc web siu cute này lên nữa nè, ngày nào anh cũng up ảnh mới lên, cho vợ xem mỗi ngày luôn kaka</p>
                    <p className="size_p_tag">Chiếc web này xịn xò hơn cuốn sổ cun mèo rùi nhá, do nó có thể update mỗi ngày được kaka^^</p>
                    <p className="size_p_tag">Nhưng mà đối với anh, cuốn sổ cun mèo vẫn là tuyệt vời nhất❤️</p>
                    <p className="size_p_tag">Tuyệt vời thui nha, vẫn khum thể so sánh với vợ iu cute của anh được đâu (BIBEO LÀ CÓ MỘT KHÔNG HAI RỒI, CHỈ CỦA QUANGTRIEU THÔI)😘😘😘</p>
                    <h1>HAPPYYY BIRTHDAYYY VỢ IUUU❤️❤️❤️</h1>
                    <h1>LOVE YOUUU FOREVER❤️</h1>

                    <Link to="/hide2">
                        <img src={gif1} alt="" style={{display: ""}}/>
                    </Link>


                </div>
                <div className="space"></div>
            </div>
        </>
    )
}